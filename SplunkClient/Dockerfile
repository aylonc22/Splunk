# Use official Node.js image to build the Angular app
FROM node:18 AS build

# Set working directory for the frontend
WORKDIR /app

# Copy package.json and install frontend dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the Angular code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use Node.js to serve the Angular app
FROM node:18 AS serve

# Set working directory for serving the frontend
WORKDIR /app

# Install 'serve' globally to serve the Angular static files
RUN npm install -g serve

# Make sure the 'dist' folder exists and contains the correct build files
# Copy the built Angular app from the build stage
COPY --from=build /app/dist/splunk-client/browser /app

# Verify the contents of the copied build folder
RUN ls -l /app

# Expose port 80 to access the Angular app
EXPOSE 80

# Serve the Angular app using 'serve'
CMD ["serve", "-s", "/app", "-l", "80"]
