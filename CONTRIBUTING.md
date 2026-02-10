# Contributing to VirusTotal Clone

Thank you for your interest in contributing to the VirusTotal Clone project! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [Issues](https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON/issues) section
2. If not, create a new issue with:
   - A clear, descriptive title
   - Detailed description of the problem or feature
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment (OS, Node version, etc.)

### Making Changes

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/VIRUSTOTAL-CLON.git
   cd VIRUSTOTAL-CLON
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test Your Changes**
   ```bash
   # Test backend
   cd backend
   npm test
   
   # Test frontend
   cd frontend
   npm test
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with..."
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Submit!

## Code Style Guidelines

### Backend (JavaScript/Node.js)
- Use ES6+ features
- Use async/await for asynchronous operations
- Use descriptive variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Handle errors properly

Example:
```javascript
/**
 * Calculate file hashes
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} Object containing hashes
 */
async function calculateHashes(filePath) {
  // Implementation
}
```

### Frontend (React)
- Use functional components with hooks
- Keep components small and reusable
- Use Material-UI components consistently
- Follow React best practices
- Add PropTypes or TypeScript types

Example:
```javascript
const FileUpload = () => {
  const [loading, setLoading] = useState(false);
  
  // Component logic
  
  return (
    // JSX
  );
};
```

## Areas for Contribution

We especially welcome contributions in these areas:

### High Priority
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication system
- [ ] Historical scan results
- [ ] API documentation with Swagger
- [ ] Comprehensive test coverage
- [ ] CI/CD pipeline

### Medium Priority
- [ ] Additional security API integrations
- [ ] PDF report generation
- [ ] Email notifications
- [ ] Dark mode theme
- [ ] Internationalization (i18n)
- [ ] Performance optimizations

### Enhancement Ideas
- [ ] Batch file scanning
- [ ] Advanced search filters
- [ ] Custom YARA rules
- [ ] Virus detection statistics dashboard
- [ ] Community features (comments, ratings)
- [ ] Mobile app (React Native)

## Development Setup

See [INSTALLATION.md](INSTALLATION.md) for detailed setup instructions.

## Testing

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

### Manual Testing Checklist
- [ ] File upload works (various file types)
- [ ] URL scanning returns results
- [ ] IP analysis shows geolocation
- [ ] Domain analysis shows DNS records
- [ ] Hash search works for known files
- [ ] Error handling works properly
- [ ] Rate limiting is enforced
- [ ] UI is responsive on mobile

## Documentation

When adding new features:
- Update README.md if it affects usage
- Update API_DOCS.md for API changes
- Add inline code comments
- Update INSTALLATION.md if setup changes

## Code Review Process

All contributions go through code review:
1. Automated checks (linting, tests)
2. Manual review by maintainers
3. Feedback and requested changes
4. Approval and merge

## Questions?

Feel free to:
- Open a discussion on GitHub
- Comment on existing issues
- Reach out to maintainers

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Keep discussions on-topic
- Report unacceptable behavior

Thank you for contributing! 🎉
