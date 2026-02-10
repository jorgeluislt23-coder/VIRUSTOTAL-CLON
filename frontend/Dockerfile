# Frontend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port
EXPOSE 3001

# Start the application
CMD ["serve", "-s", "build", "-l", "3001"]
