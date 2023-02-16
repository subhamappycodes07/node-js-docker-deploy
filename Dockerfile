FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm install

# Copying rest of the application to app directory
COPY . ./

# Setting env variable

ENV PORT 5000

# Expose the port and start the application
EXPOSE $PORT

CMD ["npm","run","dev"]