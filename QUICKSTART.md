# Quick Start Guide - VirusTotal Clone

## Getting the Application Running

If you're seeing the error "no me habla el http://localhost:3001", it means the frontend server isn't running yet. Follow these steps:

### Prerequisites
- Node.js 16+ installed
- npm installed

### Step 1: Install Dependencies

#### Backend
```bash
cd backend
npm install
cp .env.example .env
```

#### Frontend
```bash
cd frontend
npm install
```

### Step 2: Start the Servers

Open **two terminal windows**:

#### Terminal 1 - Start Backend
```bash
cd backend
npm start
```

You should see:
```
🚀 VirusTotal Clone API running on port 3000
📝 Environment: development
🔒 CORS enabled for: http://localhost:3001
```

#### Terminal 2 - Start Frontend
```bash
cd frontend
npm start
```

After compilation, you should see:
```
Compiled successfully!

You can now view virustotal-clone-frontend in the browser.

  Local:            http://localhost:3001
```

### Step 3: Access the Application

Open your browser and navigate to:
```
http://localhost:3001
```

You should see the VirusTotal Clone interface with tabs for FILE, URL, IP ADDRESS, DOMAIN, and SEARCH.

## Troubleshooting

### Port Already in Use
If port 3000 or 3001 is already in use:

**Backend:**
```bash
PORT=3005 npm start
```

**Frontend:**
```bash
PORT=3006 npm start
```

Then update `backend/.env` to set `CORS_ORIGIN=http://localhost:3006`

### Dependencies Error
If you see module not found errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Backend Not Responding
Check that the backend is running:
```bash
curl http://localhost:3000/health
```

Should return: `{"status":"ok","timestamp":"..."}`

## What Each Server Does

- **Backend (port 3000)**: RESTful API that handles file scanning, URL analysis, IP lookups, etc.
- **Frontend (port 3001)**: React application that provides the user interface

Both must be running for the application to work properly.

## Next Steps

- Configure API keys in `backend/.env` for full functionality
- See [INSTALLATION.md](INSTALLATION.md) for detailed setup
- See [API_DOCS.md](API_DOCS.md) for API documentation
