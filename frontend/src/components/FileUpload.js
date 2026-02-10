import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Chip,
  Divider
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  InsertDriveFile as FileIcon
} from '@mui/icons-material';
import { scanFile } from '../services/api';

const FileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await scanFile(file);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to scan file');
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 650000000 // 650MB
  });

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper
        {...getRootProps()}
        sx={{
          p: 4,
          textAlign: 'center',
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'grey.300',
          bgcolor: isDragActive ? 'action.hover' : 'background.paper',
          cursor: 'pointer',
          transition: 'all 0.3s',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'action.hover'
          }
        }}
      >
        <input {...getInputProps()} />
        <UploadIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          {isDragActive ? 'Drop file here' : 'Choose file or drag it here'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Maximum file size: 650 MB
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Select File
        </Button>
      </Paper>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {result && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FileIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">{result.file?.name}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              File Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Chip label={`Size: ${(result.file?.size / 1024 / 1024).toFixed(2)} MB`} sx={{ mr: 1, mb: 1 }} />
              <Chip label={`Type: ${result.file?.mimeType}`} sx={{ mr: 1, mb: 1 }} />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              File Hashes
            </Typography>
            <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
              <Box sx={{ mb: 1 }}>
                <strong>MD5:</strong> {result.file?.hashes?.md5}
              </Box>
              <Box sx={{ mb: 1 }}>
                <strong>SHA1:</strong> {result.file?.hashes?.sha1}
              </Box>
              <Box sx={{ mb: 1 }}>
                <strong>SHA256:</strong> {result.file?.hashes?.sha256}
              </Box>
            </Box>

            {result.scan && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Scan Results
                </Typography>
                <Alert severity="info">
                  {result.scan.status || 'Scan initiated successfully'}
                </Alert>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default FileUpload;
