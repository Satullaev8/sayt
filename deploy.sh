#!/usr/bin/env bash
# ==============================================================================
# DEPLOYMENT SCRIPT FOR SATULLAEV.UZ (Ubuntu Linux + Nginx on AWS EC2)
# ==============================================================================

set -euo pipefail

TARGET_DIR="/var/www/html"
BACKUP_DIR="/var/www/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_PATH="${BACKUP_DIR}/html_backup_${TIMESTAMP}"
DIST_SOURCE="./dist"

echo "=================================================="
echo "  Deploying SATULLAEV.UZ Production Build"
echo "  Target: ${TARGET_DIR}"
echo "=================================================="

# 1. Verify build exists
if [ ! -d "${DIST_SOURCE}" ]; then
    echo "[!] Error: '${DIST_SOURCE}' folder not found!"
    echo "    Please run 'npm run build' first before deploying."
    exit 1
fi

# 2. Create backup of current files
echo "[*] Step 1: Creating backup of existing files..."
sudo mkdir -p "${BACKUP_DIR}"

if [ -d "${TARGET_DIR}" ] && [ "$(ls -A "${TARGET_DIR}" 2>/dev/null)" ]; then
    sudo cp -r "${TARGET_DIR}" "${BACKUP_PATH}"
    echo "[+] Safe backup created at: ${BACKUP_PATH}"
else
    echo "[i] Target directory is empty or new. Skipping backup."
fi

# 3. Deploy new compiled dist files
echo "[*] Step 2: Copying compiled files to ${TARGET_DIR}..."
sudo mkdir -p "${TARGET_DIR}"
sudo rsync -av --delete "${DIST_SOURCE}/" "${TARGET_DIR}/"

# 4. Set proper permissions for Nginx (www-data)
echo "[*] Step 3: Setting correct file permissions..."
sudo chown -R www-data:www-data "${TARGET_DIR}"
sudo find "${TARGET_DIR}" -type d -exec chmod 755 {} +
sudo find "${TARGET_DIR}" -type f -exec chmod 644 {} +

# 5. Test and reload Nginx
echo "[*] Step 4: Testing Nginx configuration..."
if sudo nginx -t; then
    echo "[+] Nginx syntax valid. Reloading service..."
    sudo systemctl reload nginx
    echo "[✓] Nginx reloaded successfully!"
else
    echo "[!] Nginx configuration error detected. Please verify your Nginx config."
    exit 1
fi

echo "=================================================="
echo "  [SUCCESS] Deployment complete for satullaev.uz!"
echo "  Test your live site: https://satullaev.uz"
echo "=================================================="
