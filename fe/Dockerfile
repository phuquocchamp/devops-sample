# Dockerfile.fe

# Stage 1: Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY fe/package*.json ./
RUN npm install
COPY fe .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
