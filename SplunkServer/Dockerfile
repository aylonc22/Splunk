# Use official Node.js image as base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port the app runs on (assuming your app runs on 3000)
EXPOSE 3000

# Run the Node.js app
CMD ["npm", "start"]
