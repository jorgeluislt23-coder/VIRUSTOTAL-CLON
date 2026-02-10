# Screenshots and UI Demo

## Main Interface

The VirusTotal Clone features a modern, Material-UI based interface with the following components:

### 1. Header
- **Logo**: 🛡️ VirusTotal Clone
- **Subtitle**: Security Scanner & Threat Intelligence
- **Color Scheme**: Blue (#394EFF) primary theme

### 2. Navigation Tabs
Five main tabs arranged horizontally:
1. **FILE** - File upload and analysis (📄 icon)
2. **URL** - URL scanning (🔗 icon)
3. **IP ADDRESS** - IP analysis (💻 icon)
4. **DOMAIN** - Domain lookup (🌐 icon)
5. **SEARCH** - Hash search (🔍 icon)

---

## Tab Views

### FILE Tab
**Upload Area:**
- Large drag-and-drop zone with dashed border
- Upload icon (☁️) centered
- Text: "Choose file or drag it here"
- Subtext: "Maximum file size: 650 MB"
- Blue "Select File" button

**Results Display:**
When a file is scanned, shows:
- File icon and filename
- File size chip (e.g., "Size: 2.45 MB")
- File type chip (e.g., "Type: application/pdf")
- Hash section with:
  - MD5 hash
  - SHA1 hash
  - SHA256 hash
  - SHA512 hash (monospace font)
- Scan results section with status

---

### URL Tab
**Scanner Interface:**
- 🔗 URL Scanner heading
- Full-width text input: "Enter URL"
- Placeholder: "https://example.com"
- Blue "Scan" button with search icon

**Results Display:**
- URL being scanned
- VirusTotal scan status
- URLScan.io status
- Success/error messages
- "Scan initiated" chips in various colors

---

### IP ADDRESS Tab
**Analyzer Interface:**
- 💻 IP Address Analyzer heading
- Text input: "Enter IP Address"
- Placeholder: "8.8.8.8"
- Blue "Analyze" button

**Results Display:**
- IP address (monospace)
- Geolocation section with chips:
  - Country
  - Region
  - City
  - Timezone
- Reverse DNS hostnames
- AbuseIPDB confidence score (colored chip)
- Success message

---

### DOMAIN Tab
**Analyzer Interface:**
- 🌐 Domain Analyzer heading
- Text input: "Enter Domain"
- Placeholder: "example.com"
- Blue "Analyze" button

**Results Display:**
- Domain name (monospace)
- DNS Records (expandable accordion):
  - A Records
  - AAAA Records
  - MX Records (with priority)
  - NS Records
  - TXT Records
- WHOIS Information (expandable accordion):
  - Raw WHOIS data in monospace

---

### SEARCH Tab
**Search Interface:**
- 🔍 Search by Hash heading
- Text input: "Enter Hash (MD5, SHA1, SHA256, SHA512)"
- Placeholder: "Enter file hash..."
- Blue "Search" button

**Results Display:**
- Hash (monospace, word-break)
- Hash type (MD5/SHA1/SHA256/SHA512)
- Search status
- "File found" or "No previous analysis" messages

---

## Design Elements

### Color Palette
- **Primary**: #394EFF (Blue)
- **Secondary**: #FF6B9D (Pink)
- **Background**: #f5f5f5 (Light gray)
- **Paper**: #ffffff (White)
- **Text Primary**: rgba(0, 0, 0, 0.87)
- **Text Secondary**: rgba(0, 0, 0, 0.6)

### Typography
- **Font Family**: Roboto, Helvetica, Arial, sans-serif
- **Monospace**: Used for hashes, IPs, domains

### Components
- **Cards**: Elevated white cards with shadows
- **Chips**: Rounded pills for tags/status
- **Buttons**: Contained or outlined, with icons
- **Inputs**: Outlined text fields
- **Accordions**: Expandable sections for detailed info
- **Alerts**: Info/Success/Warning/Error messages
- **Dividers**: Subtle lines to separate sections

### Spacing
- Consistent padding: 16px-32px
- Margin top: 16px-32px between sections
- Max width: 800px (centered)

### Responsive Design
- Full width on mobile
- Centered with max-width on desktop
- Touch-friendly tap targets
- Readable font sizes

---

## User Experience Features

### Loading States
- Circular progress spinner during analysis
- Button text changes: "Scan" → "Scanning..."
- Disabled inputs during processing

### Error Handling
- Red error alerts for invalid inputs
- Clear error messages
- Validation before submission

### Success Feedback
- Green success chips
- Info alerts for completed operations
- Detailed results display

### Interactive Elements
- Hover effects on buttons
- Drag-and-drop highlighting
- Expandable/collapsible sections
- Smooth transitions

---

## Footer
- "VirusTotal Clone - Educational Security Scanner"
- "Integrates with VirusTotal, URLScan.io, AbuseIPDB and more"
- Centered text, gray color
- Top border separator

---

## Real-World Appearance

The interface closely mimics VirusTotal's professional design:
- Clean, uncluttered layout
- Professional color scheme
- Intuitive navigation
- Clear visual hierarchy
- Responsive and modern
- Focus on functionality

The UI provides an excellent user experience for security analysis tasks while maintaining a familiar, VirusTotal-like appearance that users will find intuitive and easy to use.
