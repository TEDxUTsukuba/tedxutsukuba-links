FROM node:16.18.0-slim AS base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .


FROM base AS build
ENV NODE_ENV=production
WORKDIR /build

COPY --from=base /app ./
RUN yarn build:next


FROM node:16.18.0-slim AS node_modules

WORKDIR /modules

COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production


FROM node:16.18.0-slim
ENV NODE_ENV=production
WORKDIR /app

COPY next.config.js ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next/static ./.next/static
COPY --from=build /build/.next/standalone ./

EXPOSE 8080

CMD ["node", "server.js"]