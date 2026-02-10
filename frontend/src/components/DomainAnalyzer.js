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
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { Language as LanguageIcon, Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { analyzeDomain } from '../services/api';

const DomainAnalyzer = () => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!domain) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeDomain(domain);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to analyze domain');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LanguageIcon sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h5">Domain Analyzer</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Enter Domain"
            placeholder="example.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
            disabled={loading}
          />
          <Button
            variant="contained"
            onClick={handleAnalyze}
            disabled={loading || !domain}
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
              Domain
            </Typography>
            <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
              {result.domain}
            </Typography>

            {result.analysis?.basic?.dns && !result.analysis.basic.dns.error && (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>DNS Records</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {result.analysis.basic.dns.A?.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>A Records</Typography>
                      {result.analysis.basic.dns.A.map((record, idx) => (
                        <Typography key={idx} sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                          • {record}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {result.analysis.basic.dns.AAAA?.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>AAAA Records</Typography>
                      {result.analysis.basic.dns.AAAA.map((record, idx) => (
                        <Typography key={idx} sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                          • {record}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {result.analysis.basic.dns.MX?.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>MX Records</Typography>
                      {result.analysis.basic.dns.MX.map((record, idx) => (
                        <Typography key={idx} sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                          • {record.exchange} (priority: {record.priority})
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {result.analysis.basic.dns.NS?.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>NS Records</Typography>
                      {result.analysis.basic.dns.NS.map((record, idx) => (
                        <Typography key={idx} sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                          • {record}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            )}

            {result.analysis?.basic?.whois?.data && (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>WHOIS Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>
                    {result.analysis.basic.whois.data}
                  </Box>
                </AccordionDetails>
              </Accordion>
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

export default DomainAnalyzer;
