FROM node:gallium

WORKDIR /application
COPY package*.json ./
RUN npm install
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

RUN npm run build

CMD ["npm", "run", "serve"]

