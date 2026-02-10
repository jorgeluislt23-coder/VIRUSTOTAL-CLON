# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Health Check
Check if the API is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

---

### File Analysis

#### Scan File
Upload and scan a file for malware.

**Endpoint:** `POST /api/file/scan`

**Content-Type:** `multipart/form-data`

**Parameters:**
- `file` (file): File to scan (max 650MB)

**Response:**
```json
{
  "success": true,
  "file": {
    "name": "example.exe",
    "size": 1024000,
    "mimeType": "application/x-msdownload",
    "extension": "exe",
    "hashes": {
      "md5": "5d41402abc4b2a76b9719d911017c592",
      "sha1": "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d",
      "sha256": "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae",
      "sha512": "..."
    }
  },
  "scan": {
    "status": "Scan initiated successfully"
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

#### Get File Report
Get a file report by hash.

**Endpoint:** `GET /api/file/report/:hash`

**Parameters:**
- `hash` (path): File hash (MD5, SHA1, or SHA256)

**Response:**
```json
{
  "success": true,
  "hash": "5d41402abc4b2a76b9719d911017c592",
  "report": {
    "data": {
      "attributes": {
        "last_analysis_stats": {
          "malicious": 5,
          "suspicious": 2,
          "undetected": 63,
          "harmless": 0
        }
      }
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

---

### URL Analysis

#### Scan URL
Scan a URL for threats.

**Endpoint:** `POST /api/url/scan`

**Content-Type:** `application/json`

**Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "success": true,
  "url": "https://example.com",
  "scans": {
    "virustotal": {
      "data": {
        "id": "u-abc123..."
      }
    },
    "urlscan": {
      "uuid": "xyz789...",
      "message": "Submission successful"
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

#### Get URL Report
Get URL analysis report.

**Endpoint:** `GET /api/url/report/:urlId`

**Parameters:**
- `urlId` (path): URL ID from scan

**Response:**
```json
{
  "success": true,
  "urlId": "u-abc123...",
  "report": {
    "data": {
      "attributes": {
        "last_analysis_stats": {
          "malicious": 2,
          "suspicious": 1,
          "clean": 67
        }
      }
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

---

### IP Address Analysis

#### Analyze IP
Get comprehensive IP address information.

**Endpoint:** `POST /api/ip/analyze`

**Content-Type:** `application/json`

**Body:**
```json
{
  "ip": "8.8.8.8"
}
```

**Response:**
```json
{
  "success": true,
  "ip": "8.8.8.8",
  "analysis": {
    "basic": {
      "geolocation": {
        "found": true,
        "country": "US",
        "region": "CA",
        "city": "Mountain View",
        "coordinates": {
          "latitude": 37.386,
          "longitude": -122.0838
        },
        "timezone": "America/Los_Angeles"
      },
      "reverseDNS": ["dns.google"]
    },
    "virustotal": {
      "data": {
        "attributes": {
          "reputation": 100
        }
      }
    },
    "abuseipdb": {
      "abuseConfidenceScore": 0,
      "usageType": "Data Center/Web Hosting/Transit"
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

#### Get IP Report
Get VirusTotal IP report.

**Endpoint:** `GET /api/ip/report/:ip`

**Parameters:**
- `ip` (path): IP address

---

### Domain Analysis

#### Analyze Domain
Get comprehensive domain information.

**Endpoint:** `POST /api/domain/analyze`

**Content-Type:** `application/json`

**Body:**
```json
{
  "domain": "example.com"
}
```

**Response:**
```json
{
  "success": true,
  "domain": "example.com",
  "analysis": {
    "basic": {
      "dns": {
        "A": ["93.184.216.34"],
        "AAAA": ["2606:2800:220:1:248:1893:25c8:1946"],
        "MX": [
          {
            "exchange": "mail.example.com",
            "priority": 10
          }
        ],
        "NS": ["ns1.example.com", "ns2.example.com"],
        "TXT": [["v=spf1 include:_spf.example.com ~all"]]
      },
      "whois": {
        "data": "Domain Name: EXAMPLE.COM\nRegistry Domain ID: 2336799_DOMAIN_COM-VRSN..."
      }
    },
    "virustotal": {
      "data": {
        "attributes": {
          "last_analysis_stats": {
            "malicious": 0,
            "suspicious": 0,
            "clean": 70
          }
        }
      }
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

#### Get Domain Report
Get VirusTotal domain report.

**Endpoint:** `GET /api/domain/report/:domain`

**Parameters:**
- `domain` (path): Domain name

---

### Hash Search

#### Search by Hash
Search for previous file analysis by hash.

**Endpoint:** `GET /api/search/:hash`

**Parameters:**
- `hash` (path): File hash (MD5, SHA1, SHA256, or SHA512)

**Response:**
```json
{
  "success": true,
  "hash": "5d41402abc4b2a76b9719d911017c592",
  "hashType": "md5",
  "report": {
    "found": true,
    "data": {
      "attributes": {
        "last_analysis_stats": {
          "malicious": 5,
          "suspicious": 2,
          "undetected": 63
        }
      }
    }
  },
  "timestamp": "2026-02-10T14:25:48.442Z"
}
```

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "error": {
    "message": "Error description",
    "status": 400,
    "timestamp": "2026-02-10T14:25:48.442Z",
    "path": "/api/file/scan"
  }
}
```

### Common HTTP Status Codes
- `200 OK`: Success
- `400 Bad Request`: Invalid input
- `401 Unauthorized`: Authentication required
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

---

## Rate Limiting

- **Window:** 15 minutes (900000ms)
- **Max Requests:** 100 per window per IP
- Rate limit info is included in response headers:
  - `RateLimit-Limit`: Maximum requests allowed
  - `RateLimit-Remaining`: Remaining requests
  - `RateLimit-Reset`: Time when limit resets

---

## CORS

The API supports CORS for the frontend application running on `http://localhost:3001`.

---

## Authentication (Optional)

JWT-based authentication can be enabled for protected endpoints. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```
