FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm install

# Copying rest of the application to app directory
COPY . ./

# Expose the port and start the application
EXPOSE 5000

CMD ["npm","run","dev"]