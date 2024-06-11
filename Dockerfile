From node:20.14.0

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
