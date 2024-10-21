FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG PORT
ARG TOKEN
ARG WEB_APP_URL
EXPOSE $PORT
CMD [ "npm", "start" ]