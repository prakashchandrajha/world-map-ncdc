# Production Dockerfile for Angular frontend
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# In case this app uses Angular production configuration in angular.json
RUN npm run build -- --configuration production

FROM nginx:alpine
# Optional custom nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/world-map-ncdc /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
