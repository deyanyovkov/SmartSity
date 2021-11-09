FROM node:14.17.4

RUN mkdir /dist

COPY dist/ dist

WORKDIR /dist

EXPOSE 8080
CMD ["npm", "start"]
