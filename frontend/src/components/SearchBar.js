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
  Divider
} from '@mui/material';
import { Search as SearchIcon, Tag as TagIcon } from '@mui/icons-material';
import { searchByHash } from '../services/api';

const SearchBar = () => {
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!hash) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await searchByHash(hash);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to search hash');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <TagIcon sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h5">Search by Hash</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Enter Hash (MD5, SHA1, SHA256, SHA512)"
            placeholder="Enter file hash..."
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            disabled={loading}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={loading || !hash}
            startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
            sx={{ minWidth: 120 }}
          >
            {loading ? 'Searching...' : 'Search'}
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
              Search Results
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Hash ({result.hashType?.toUpperCase()})
            </Typography>
            <Typography sx={{ mb: 2, fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {result.hash}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {result.report?.found === false ? (
              <Alert severity="info">
                No previous analysis found for this hash
              </Alert>
            ) : result.report?.data ? (
              <Alert severity="success">
                File found in database. Analysis data available.
              </Alert>
            ) : (
              <Alert severity="info">
                Search completed
              </Alert>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default SearchBar;
