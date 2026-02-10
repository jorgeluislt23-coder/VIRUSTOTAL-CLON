const crypto = require('crypto');
const fs = require('fs').promises;

/**
 * Calculate multiple hashes for a file
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} Object containing MD5, SHA1, SHA256, SHA512 hashes
 */
async function calculateHashes(filePath) {
  const fileBuffer = await fs.readFile(filePath);
  
  return {
    md5: crypto.createHash('md5').update(fileBuffer).digest('hex'),
    sha1: crypto.createHash('sha1').update(fileBuffer).digest('hex'),
    sha256: crypto.createHash('sha256').update(fileBuffer).digest('hex'),
    sha512: crypto.createHash('sha512').update(fileBuffer).digest('hex')
  };
}

/**
 * Calculate hash for a string (URL, domain, etc.)
 * @param {string} text - Text to hash
 * @returns {string} SHA256 hash
 */
function calculateStringHash(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

module.exports = {
  calculateHashes,
  calculateStringHash
};
