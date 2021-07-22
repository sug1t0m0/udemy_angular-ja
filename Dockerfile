FROM node:12.22.3

WORKDIR /projects

RUN npm install @angular-devkit/build-angular
RUN npm install -g @angular/cli
RUN npm install -g firebase-tools

EXPOSE 4200
