const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const urlController = require('../controllers/urlController');
const ipController = require('../controllers/ipController');
const domainController = require('../controllers/domainController');
const searchController = require('../controllers/searchController');

// File routes
router.post('/file/scan', fileController.upload.single('file'), fileController.scanFile);
router.get('/file/report/:hash', fileController.getFileReport);

// URL routes
router.post('/url/scan', urlController.scanUrl);
router.get('/url/report/:urlId', urlController.getUrlReport);

// IP routes
router.post('/ip/analyze', ipController.analyzeIP);
router.get('/ip/report/:ip', ipController.getIPReport);

// Domain routes
router.post('/domain/analyze', domainController.analyzeDomain);
router.get('/domain/report/:domain', domainController.getDomainReport);

// Search routes
router.get('/search/:hash', searchController.searchByHash);

module.exports = router;
