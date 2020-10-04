#
# Build frontend
#
FROM node:14.7.0-alpine AS build
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY package-lock.json ./
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
