const validator = require('validator');

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean}
 */
function isValidUrl(url) {
  return validator.isURL(url, {
    protocols: ['http', 'https'],
    require_protocol: true
  });
}

/**
 * Validate IP address (IPv4 or IPv6)
 * @param {string} ip - IP address to validate
 * @returns {boolean}
 */
function isValidIP(ip) {
  return validator.isIP(ip);
}

/**
 * Validate domain
 * @param {string} domain - Domain to validate
 * @returns {boolean}
 */
function isValidDomain(domain) {
  return validator.isFQDN(domain);
}

/**
 * Validate hash (MD5, SHA1, SHA256)
 * @param {string} hash - Hash to validate
 * @returns {Object} Validation result with type
 */
function validateHash(hash) {
  if (validator.isHash(hash, 'md5')) {
    return { valid: true, type: 'md5' };
  }
  if (validator.isHash(hash, 'sha1')) {
    return { valid: true, type: 'sha1' };
  }
  if (validator.isHash(hash, 'sha256')) {
    return { valid: true, type: 'sha256' };
  }
  if (validator.isHash(hash, 'sha512')) {
    return { valid: true, type: 'sha512' };
  }
  return { valid: false, type: null };
}

/**
 * Sanitize user input
 * @param {string} input - User input
 * @returns {string}
 */
function sanitizeInput(input) {
  return validator.escape(input.trim());
}

module.exports = {
  isValidUrl,
  isValidIP,
  isValidDomain,
  validateHash,
  sanitizeInput
};
