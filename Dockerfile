FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

# Copying rest of the application to app directory
COPY . ./

# Setting env variable

ENV PORT 5000

# Expose the port and start the application
EXPOSE $PORT

CMD ["node","app.js"]