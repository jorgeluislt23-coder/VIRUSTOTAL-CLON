import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// File API
export const scanFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post('/file/scan', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getFileReport = async (hash) => {
  const response = await api.get(`/file/report/${hash}`);
  return response.data;
};

// URL API
export const scanUrl = async (url) => {
  const response = await api.post('/url/scan', { url });
  return response.data;
};

export const getUrlReport = async (urlId) => {
  const response = await api.get(`/url/report/${urlId}`);
  return response.data;
};

// IP API
export const analyzeIP = async (ip) => {
  const response = await api.post('/ip/analyze', { ip });
  return response.data;
};

export const getIPReport = async (ip) => {
  const response = await api.get(`/ip/report/${ip}`);
  return response.data;
};

// Domain API
export const analyzeDomain = async (domain) => {
  const response = await api.post('/domain/analyze', { domain });
  return response.data;
};

export const getDomainReport = async (domain) => {
  const response = await api.get(`/domain/report/${domain}`);
  return response.data;
};

// Search API
export const searchByHash = async (hash) => {
  const response = await api.get(`/search/${hash}`);
  return response.data;
};

export default api;
