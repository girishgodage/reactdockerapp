# Step 1: Build React Project
FROM node:12-alpine3.12 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2 : Create a NGINX Server
FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;" ]