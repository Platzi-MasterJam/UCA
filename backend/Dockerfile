FROM node:12.20.1 AS builder
WORKDIR /hn-backend
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
## RUN npm run test

FROM node:12.20.1-alpine
WORKDIR /hn-backend
COPY --from=builder /hn-backend ./
EXPOSE 4000
CMD ["npm", "run", "start:prod"]


