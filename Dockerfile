FROM node:14.20-alpine
WORKDIR /app
COPY . .
RUN cp .example.env .env
RUN npm install
CMD ["node", "--require", "ts-node/register", "src/index.ts"]