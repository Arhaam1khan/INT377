# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Compile the TypeScript code to JavaScript
RUN npm run build

# Make port 3000 available outside this container
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]