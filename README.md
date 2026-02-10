# 🛡️ VirusTotal Clone - Security Scanner & Threat Intelligence Platform

A comprehensive web application that replicates the main functionalities of VirusTotal, providing file, URL, IP address, and domain analysis through integration with multiple security APIs.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)

## ✨ Features

### 🔍 Analysis Capabilities
- **File Analysis**: Upload files up to 650MB and get comprehensive security reports
  - Multiple hash calculations (MD5, SHA1, SHA256, SHA512)
  - File type detection and metadata extraction
  - Integration with VirusTotal API
  
- **URL Scanning**: Analyze suspicious URLs
  - Malware and phishing detection
  - Integration with VirusTotal and URLScan.io
  
- **IP Address Analysis**: Get detailed information about IP addresses
  - Geolocation data
  - Reverse DNS lookup
  - Reputation checking with AbuseIPDB
  - VirusTotal threat intelligence
  
- **Domain Analysis**: Comprehensive domain information
  - DNS records (A, AAAA, MX, NS, TXT, CNAME)
  - WHOIS information
  - VirusTotal domain reports
  
- **Hash Search**: Quick lookup of previously analyzed files by hash

### 🎨 User Interface
- Modern, intuitive Material-UI design
- Responsive layout for all devices
- Tab-based navigation (FILE, URL, IP, DOMAIN, SEARCH)
- Drag & drop file upload
- Real-time analysis results
- Detailed information display

### 🔧 Technical Features
- RESTful API architecture
- Rate limiting for API protection
- CORS support
- Error handling and validation
- Modular and scalable code structure
- Docker support for easy deployment

## 📋 Requirements

- Node.js 16.x or higher
- npm or yarn
- Docker and Docker Compose (optional)
- Visual Studio Code (recommended) - [See VS Code Setup Guide](GUIA_VSCODE.md) 🇪🇸

## 🚀 Quick Start

> **⚠️ Important**: Both backend and frontend must be running for the application to work!
> 
> **🇪🇸 ¿Usas Visual Studio Code?** Lee la [Guía completa de VS Code](GUIA_VSCODE.md) para instrucciones detalladas en español.

### Option 1: Manual Setup

#### 1. Clone the repository
```bash
git clone https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON.git
cd VIRUSTOTAL-CLON
```

#### 2. Setup Backend
```bash
cd backend
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and add your API keys (optional for basic functionality)
nano .env
```

#### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

#### 4. Start the Application (requires 2 terminals)

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Backend will run on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Frontend will run on http://localhost:3001
```

**✅ Access the application**: Open http://localhost:3001 in your browser

> **Note**: If you see "no me habla" (not responding), make sure both servers are running. See [QUICKSTART.md](QUICKSTART.md) for troubleshooting.

### Option 2: Docker Compose

```bash
# Start databases only (PostgreSQL, MongoDB, Redis)
docker-compose up -d

# Then run backend and frontend manually as shown above
```

## 🔑 API Keys Configuration

To use all features, you'll need to obtain API keys from these services:

### Required APIs
- **VirusTotal** (https://www.virustotal.com/gui/my-apikey)
  - File, URL, IP, and domain scanning
  - Free tier: 4 requests/minute

### Optional APIs (for enhanced features)
- **URLScan.io** (https://urlscan.io/about/api/)
  - URL analysis and screenshots
  
- **AbuseIPDB** (https://www.abuseipdb.com/api)
  - IP reputation checking
  
- **Shodan** (https://account.shodan.io/)
  - IP and device information
  
- **Google Safe Browsing** (https://developers.google.com/safe-browsing)
  - URL safety checking

Add your API keys to `backend/.env`:
```env
VIRUSTOTAL_API_KEY=your_key_here
URLSCAN_API_KEY=your_key_here
ABUSEIPDB_API_KEY=your_key_here
```

## 📁 Project Structure

```
VIRUSTOTAL-CLON/
├── backend/                    # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Express middleware
│   │   ├── routes/            # API routes
│   │   ├── services/          # External API integrations
│   │   ├── utils/             # Utility functions
│   │   └── index.js           # Entry point
│   ├── uploads/               # Temporary file storage
│   ├── package.json
│   └── .env.example
│
├── frontend/                   # Frontend (React + Material-UI)
│   ├── public/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── FileUpload.js
│   │   │   ├── UrlScanner.js
│   │   │   ├── IpAnalyzer.js
│   │   │   ├── DomainAnalyzer.js
│   │   │   └── SearchBar.js
│   │   ├── services/          # API client
│   │   ├── App.js             # Main component
│   │   └── index.js
│   └── package.json
│
├── docker-compose.yml         # Docker configuration
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### File Analysis
- `POST /api/file/scan` - Upload and scan a file
- `GET /api/file/report/:hash` - Get file report by hash

### URL Analysis
- `POST /api/url/scan` - Scan a URL
- `GET /api/url/report/:urlId` - Get URL report

### IP Analysis
- `POST /api/ip/analyze` - Analyze an IP address
- `GET /api/ip/report/:ip` - Get IP report

### Domain Analysis
- `POST /api/domain/analyze` - Analyze a domain
- `GET /api/domain/report/:domain` - Get domain report

### Search
- `GET /api/search/:hash` - Search by file hash

### Health Check
- `GET /health` - API health status

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📸 Screenshots

The application provides:
- Clean, modern interface similar to VirusTotal
- Tabbed navigation for different analysis types
- Drag & drop file upload
- Detailed results display with expandable sections
- Real-time analysis feedback

## 🛠️ Technology Stack

### Backend
- **Framework**: Express.js (Node.js)
- **APIs**: VirusTotal, URLScan.io, AbuseIPDB
- **Security**: Helmet, CORS, Rate Limiting, JWT
- **Utilities**: Multer (file uploads), Axios (HTTP client)
- **Validation**: Validator.js
- **File Analysis**: crypto, mime-types, geoip-lite

### Frontend
- **Framework**: React 18
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **File Upload**: react-dropzone
- **Styling**: Emotion (CSS-in-JS)

### Infrastructure
- **Databases**: PostgreSQL, MongoDB, Redis (optional)
- **Containerization**: Docker & Docker Compose

## 🔒 Security Features

- Rate limiting to prevent abuse
- Input validation and sanitization
- CORS configuration
- Helmet security headers
- File size restrictions
- Secure API key management via environment variables

## 🚧 Roadmap

- [ ] User authentication and API keys
- [ ] Historical scan results database
- [ ] Advanced file analysis with YARA rules
- [ ] PDF report generation
- [ ] Email notifications
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Batch file scanning
- [ ] API documentation with Swagger
- [ ] Extended threat intelligence sources

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This is an educational project created to demonstrate security analysis capabilities. It should not be used as a replacement for professional security tools. Always use multiple security solutions and follow best practices when dealing with potentially malicious files or URLs.

## 🙏 Acknowledgments

- VirusTotal for API access
- All the security API providers
- Material-UI for the excellent component library
- The open-source community

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

Made with ❤️ for cybersecurity education
