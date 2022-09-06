FROM node:16-alpine

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN rm -rf node_modules package-lock.json
RUN chown node:node -R /home/node

USER node

RUN npm install && npm cache clean --force --loglevel=error
COPY --chown=node:node . .

CMD [ "npm", "start"]