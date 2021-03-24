FROM node:current-alpine AS base
WORKDIR /usr/base
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn install --production
COPY ./ ./


FROM base AS build
ENV NODE_ENV=production
WORKDIR /usr/build
COPY --from=base /usr/base ./
RUN yarn build


FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /usr/app
COPY --from=build /usr/build/package*.json ./
COPY --from=build /usr/build/.next ./.next
COPY --from=build /usr/build/public ./public
RUN yarn add next

EXPOSE 3000
CMD ["yarn", "start" ]