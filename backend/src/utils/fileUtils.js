const mime = require('mime-types');
const fs = require('fs').promises;

/**
 * Get file information
 * @param {string} filePath - Path to the file
 * @param {string} originalName - Original filename
 * @returns {Promise<Object>} File information
 */
async function getFileInfo(filePath, originalName) {
  const stats = await fs.stat(filePath);
  const mimeType = mime.lookup(originalName) || 'application/octet-stream';
  
  return {
    name: originalName,
    size: stats.size,
    mimeType,
    extension: mime.extension(mimeType) || 'unknown',
    created: stats.birthtime,
    modified: stats.mtime
  };
}

/**
 * Validate file size
 * @param {number} size - File size in bytes
 * @param {number} maxSize - Maximum allowed size
 * @returns {boolean}
 */
function validateFileSize(size, maxSize) {
  return size <= maxSize;
}

/**
 * Get human-readable file size
 * @param {number} bytes - Size in bytes
 * @returns {string}
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

module.exports = {
  getFileInfo,
  validateFileSize,
  formatFileSize
};
