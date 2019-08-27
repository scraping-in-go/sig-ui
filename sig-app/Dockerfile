#
# Multi-stage build for Angular app
#

# Use node image with ng cli
FROM node:12-alpine as ngbuilder
RUN npm install -g @angular/cli

# Install npm dependencies
FROM ngbuilder as ngbuilder2
RUN mkdir /src/
COPY package.json /src/
WORKDIR /src/
RUN npm i


FROM ngbuilder2 as ngbuilder3
COPY . /src/
WORKDIR /src/
RUN ng build


# Server
FROM nginx:alpine as ngserver
COPY nginx.conf /etc/nginx/nginx.conf

FROM ngserver as ngserver2
WORKDIR /usr/share/nginx/html
COPY --from=ngbuilder3 /src/dist/sig-app .
