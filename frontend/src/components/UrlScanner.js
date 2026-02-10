import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider
} from '@mui/material';
import { Link as LinkIcon, Search as SearchIcon } from '@mui/icons-material';
import { scanUrl } from '../services/api';

const UrlScanner = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await scanUrl(url);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to scan URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LinkIcon sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h5">URL Scanner</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Enter URL"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleScan()}
            disabled={loading}
          />
          <Button
            variant="contained"
            onClick={handleScan}
            disabled={loading || !url}
            startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
            sx={{ minWidth: 120 }}
          >
            {loading ? 'Scanning...' : 'Scan'}
          </Button>
        </Box>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {result && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Scan Results
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              URL
            </Typography>
            <Typography sx={{ mb: 2, wordBreak: 'break-all' }}>
              {result.url}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {result.scans?.virustotal && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  VirusTotal
                </Typography>
                {result.scans.virustotal.error ? (
                  <Alert severity="warning">{result.scans.virustotal.error}</Alert>
                ) : (
                  <Chip 
                    label={result.scans.virustotal.data?.id ? 'Scan initiated' : 'Processing'} 
                    color="primary" 
                  />
                )}
              </Box>
            )}

            {result.scans?.urlscan && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  URLScan.io
                </Typography>
                {result.scans.urlscan.error ? (
                  <Alert severity="warning">{result.scans.urlscan.error}</Alert>
                ) : result.scans.urlscan.available === false ? (
                  <Alert severity="info">API not configured</Alert>
                ) : (
                  <Chip label="Scan initiated" color="success" />
                )}
              </Box>
            )}

            <Alert severity="info" sx={{ mt: 2 }}>
              Scan has been initiated. Results will be available shortly.
            </Alert>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default UrlScanner;
