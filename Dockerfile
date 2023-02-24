FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development" ]; \
#         then npm install; \
#         else npm install --only=production; \
#         fi
COPY . ./
ENV PORT 5000
EXPOSE $PORT
CMD ["node","app.js"]