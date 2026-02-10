import React, { useState } from 'react';
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper
} from '@mui/material';
import {
  InsertDriveFile,
  Link,
  Computer,
  Language,
  Search
} from '@mui/icons-material';
import FileUpload from './components/FileUpload';
import UrlScanner from './components/UrlScanner';
import IpAnalyzer from './components/IpAnalyzer';
import DomainAnalyzer from './components/DomainAnalyzer';
import SearchBar from './components/SearchBar';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#394EFF',
    },
    secondary: {
      main: '#FF6B9D',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <FileUpload />;
      case 1:
        return <UrlScanner />;
      case 2:
        return <IpAnalyzer />;
      case 3:
        return <DomainAnalyzer />;
      case 4:
        return <SearchBar />;
      default:
        return <FileUpload />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              🛡️ VirusTotal Clone
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Security Scanner & Threat Intelligence
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <Paper 
            elevation={0} 
            sx={{ 
              mt: 3, 
              borderRadius: 2,
              bgcolor: 'background.paper'
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  py: 2
                }
              }}
            >
              <Tab 
                icon={<InsertDriveFile />} 
                label="FILE" 
                iconPosition="start"
              />
              <Tab 
                icon={<Link />} 
                label="URL" 
                iconPosition="start"
              />
              <Tab 
                icon={<Computer />} 
                label="IP ADDRESS" 
                iconPosition="start"
              />
              <Tab 
                icon={<Language />} 
                label="DOMAIN" 
                iconPosition="start"
              />
              <Tab 
                icon={<Search />} 
                label="SEARCH" 
                iconPosition="start"
              />
            </Tabs>
          </Paper>

          <Box sx={{ py: 4, minHeight: '60vh' }}>
            {renderContent()}
          </Box>

          <Box 
            sx={{ 
              py: 3, 
              textAlign: 'center', 
              borderTop: 1, 
              borderColor: 'divider',
              mt: 4
            }}
          >
            <Typography variant="body2" color="text.secondary">
              VirusTotal Clone - Educational Security Scanner
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Integrates with VirusTotal, URLScan.io, AbuseIPDB and more
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
