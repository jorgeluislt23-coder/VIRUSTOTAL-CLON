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
  Divider,
  Grid
} from '@mui/material';
import { Computer as ComputerIcon, Search as SearchIcon } from '@mui/icons-material';
import { analyzeIP } from '../services/api';

const IpAnalyzer = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!ip) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeIP(ip);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to analyze IP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <ComputerIcon sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h5">IP Address Analyzer</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Enter IP Address"
            placeholder="8.8.8.8"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
            disabled={loading}
          />
          <Button
            variant="contained"
            onClick={handleAnalyze}
            disabled={loading || !ip}
            startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
            sx={{ minWidth: 140 }}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
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
              Analysis Results
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              IP Address
            </Typography>
            <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
              {result.ip}
            </Typography>

            {result.analysis?.basic?.geolocation?.found && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Geolocation
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={3}>
                    <Chip label={`Country: ${result.analysis.basic.geolocation.country}`} />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Chip label={`Region: ${result.analysis.basic.geolocation.region}`} />
                  </Grid>
                  {result.analysis.basic.geolocation.city && (
                    <Grid item xs={6} sm={3}>
                      <Chip label={`City: ${result.analysis.basic.geolocation.city}`} />
                    </Grid>
                  )}
                  {result.analysis.basic.geolocation.timezone && (
                    <Grid item xs={6} sm={3}>
                      <Chip label={`TZ: ${result.analysis.basic.geolocation.timezone}`} />
                    </Grid>
                  )}
                </Grid>
              </>
            )}

            {result.analysis?.basic?.reverseDNS?.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Reverse DNS
                </Typography>
                {result.analysis.basic.reverseDNS.map((hostname, idx) => (
                  <Typography key={idx} sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                    • {hostname}
                  </Typography>
                ))}
              </>
            )}

            {result.analysis?.abuseipdb && !result.analysis.abuseipdb.error && result.analysis.abuseipdb.available !== false && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  AbuseIPDB
                </Typography>
                <Box>
                  <Chip 
                    label={`Confidence: ${result.analysis.abuseipdb.abuseConfidenceScore || 0}%`}
                    color={result.analysis.abuseipdb.abuseConfidenceScore > 50 ? 'error' : 'success'}
                  />
                </Box>
              </>
            )}

            <Alert severity="info" sx={{ mt: 2 }}>
              Analysis completed successfully
            </Alert>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default IpAnalyzer;
