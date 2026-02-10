const axios = require('axios');
const config = require('../config');

class AbuseIPDBService {
  constructor() {
    this.apiKey = config.apiKeys.abuseipdb;
    this.baseUrl = 'https://api.abuseipdb.com/api/v2';
  }

  /**
   * Check IP reputation
   * @param {string} ip - IP address to check
   * @returns {Promise<Object>}
   */
  async checkIp(ip) {
    if (!this.apiKey) {
      console.warn('AbuseIPDB API key not configured');
      return { available: false };
    }

    try {
      const response = await axios.get(`${this.baseUrl}/check`, {
        headers: { 
          'Key': this.apiKey,
          'Accept': 'application/json'
        },
        params: {
          ipAddress: ip,
          maxAgeInDays: 90,
          verbose: true
        }
      });
      return response.data.data;
    } catch (error) {
      console.error('AbuseIPDB error:', error.message);
      return { error: error.message };
    }
  }

  /**
   * Report an IP
   * @param {string} ip - IP address
   * @param {Array<number>} categories - Category IDs
   * @param {string} comment - Comment
   * @returns {Promise<Object>}
   */
  async reportIp(ip, categories, comment) {
    if (!this.apiKey) {
      throw new Error('AbuseIPDB API key not configured');
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/report`,
        {
          ip,
          categories: categories.join(','),
          comment
        },
        {
          headers: { 
            'Key': this.apiKey,
            'Accept': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('AbuseIPDB report error:', error.message);
      throw error;
    }
  }
}

module.exports = new AbuseIPDBService();
