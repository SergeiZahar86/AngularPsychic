
# stage 1, Build an Angular Docker Image
FROM node:latest as build
WORKDIR /app
#COPY package.json package-lock.json ./
COPY package*.json /app/
RUN npm install
#COPY . /app
COPY . .
#RUN npm run build
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration


# stage 2, Используем скомпилированое приложение, готовое к производству с Nginx
FROM nginx:1.8-alpine
#COPY dist/AngularPsychic /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /app/dist/AngularPsychic /usr/share/nginx/html
COPY --from=build /app/dist/out/ /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY data/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#FROM nginx:1.8-alpine
#COPY dist/AngularPsychic /usr/share/nginx/html
