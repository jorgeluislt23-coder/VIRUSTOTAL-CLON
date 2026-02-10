const axios = require('axios');
const config = require('../config');

class URLScanService {
  constructor() {
    this.apiKey = config.apiKeys.urlscan;
    this.baseUrl = 'https://urlscan.io/api/v1';
  }

  /**
   * Submit URL for scanning
   * @param {string} url - URL to scan
   * @returns {Promise<Object>}
   */
  async scanUrl(url) {
    if (!this.apiKey) {
      console.warn('URLScan API key not configured');
      return { available: false };
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/scan/`,
        {
          url,
          visibility: 'public'
        },
        {
          headers: { 
            'API-Key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('URLScan error:', error.message);
      return { error: error.message };
    }
  }

  /**
   * Get scan result
   * @param {string} uuid - Scan UUID
   * @returns {Promise<Object>}
   */
  async getResult(uuid) {
    if (!this.apiKey) {
      throw new Error('URLScan API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/result/${uuid}/`, {
        headers: { 'API-Key': this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('URLScan result error:', error.message);
      throw error;
    }
  }

  /**
   * Search for URL scans
   * @param {string} query - Search query
   * @returns {Promise<Object>}
   */
  async search(query) {
    if (!this.apiKey) {
      throw new Error('URLScan API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/search/`, {
        headers: { 'API-Key': this.apiKey },
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error('URLScan search error:', error.message);
      throw error;
    }
  }
}

module.exports = new URLScanService();
