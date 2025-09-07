# Use Node.js 20
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Build step
RUN npm run build

# Run the server
CMD ["npm", "start"]

# Cloud Run expects the app to listen on $PORT
EXPOSE 8080
