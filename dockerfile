# Use an official Node.js runtime as a parent image
FROM node:18.17.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy the source code to the working directory
COPY . .

RUN npm run build:linux

# Expose the port that the app will run on
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run", "start"]
