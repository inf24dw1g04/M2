FROM node:lts-alpine

WORKDIR /Trabalho

COPY ./TrabalhoM2 .

RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
