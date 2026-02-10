# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional, for containerized setup) - [Download](https://www.docker.com/)

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON.git
cd VIRUSTOTAL-CLON
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your preferred text editor
nano .env
# or
vim .env
# or
code .env
```

#### Required Configuration
Update the following in `.env`:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# API Keys - Get these from respective services
VIRUSTOTAL_API_KEY=your_virustotal_api_key_here
URLSCAN_API_KEY=your_urlscan_api_key_here
ABUSEIPDB_API_KEY=your_abuseipdb_api_key_here
# ... other API keys

# Security
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

#### How to Get API Keys

**VirusTotal** (Required)
1. Go to https://www.virustotal.com/
2. Sign up for a free account
3. Go to your profile → API Key
4. Copy your API key

**URLScan.io** (Optional)
1. Go to https://urlscan.io/
2. Sign up for an account
3. Go to Settings → API Key
4. Copy your API key

**AbuseIPDB** (Optional)
1. Go to https://www.abuseipdb.com/
2. Register for an account
3. Go to Account → API
4. Copy your API key

#### Start the Backend Server
```bash
npm start
```

The backend will start on `http://localhost:3000`

You should see:
```
🚀 VirusTotal Clone API running on port 3000
📝 Environment: development
🔒 CORS enabled for: http://localhost:3001
```

### 3. Frontend Setup

Open a new terminal window/tab:

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Configure Environment (Optional)
Create a `.env` file if you need to customize the API URL:

```bash
echo "REACT_APP_API_URL=http://localhost:3000/api" > .env
```

#### Start the Frontend Development Server
```bash
npm start
```

The frontend will start on `http://localhost:3001`

Your default browser should automatically open to the application.

### 4. Verify Installation

1. **Check Backend Health**
   - Open a new terminal
   - Run: `curl http://localhost:3000/health`
   - You should see: `{"status":"ok","timestamp":"..."}`

2. **Test Frontend**
   - Open http://localhost:3001 in your browser
   - You should see the VirusTotal Clone interface
   - Try uploading a small text file to test

## Docker Installation (Alternative)

If you prefer using Docker:

### 1. Start Infrastructure Services
```bash
# Start PostgreSQL, MongoDB, and Redis
docker-compose up -d
```

### 2. Run Backend and Frontend Manually
Follow steps 2 and 3 from the manual installation above.

## Troubleshooting

### Port Already in Use
If you get an error that port 3000 or 3001 is already in use:

**Backend:**
```bash
# Change PORT in backend/.env
PORT=3005
```

**Frontend:**
```bash
# Set PORT environment variable before starting
PORT=3006 npm start
```

### Module Not Found Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
Make sure:
1. Backend is running on port 3000
2. Frontend is running on port 3001
3. CORS_ORIGIN in backend/.env is set to `http://localhost:3001`

### API Key Errors
- Verify your API keys are correct in `backend/.env`
- Some features will work without API keys (using mock/basic analysis)
- VirusTotal API key is the most important for full functionality

## Production Deployment

### Backend
```bash
cd backend
npm install --production
NODE_ENV=production npm start
```

### Frontend
```bash
cd frontend
npm run build
# Serve the build folder with a static server
npx serve -s build -l 3001
```

## Next Steps

After successful installation:
1. Read the [API Documentation](API_DOCS.md)
2. Configure additional API keys for enhanced features
3. Test each analysis type (File, URL, IP, Domain)
4. Check the main [README](README.md) for feature details

## Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify all dependencies are installed
3. Ensure API keys are correctly configured
4. Open an issue on GitHub with error details
