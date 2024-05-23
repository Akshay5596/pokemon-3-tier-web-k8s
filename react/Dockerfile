FROM node:18-alpine AS build
LABEL maintainer="akshay"
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:alpine
LABEL maintainer="akshay"
COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/ /usr/share/nginx/html
