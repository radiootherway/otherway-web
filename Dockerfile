FROM oven/bun:alpine AS base

ENV NODE_ENV=production

FROM base AS deps

WORKDIR /app

ADD package.json ./
RUN bun install

# Setup production node_modules

FROM base AS production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
# RUN bun prune --omit=dev

# Build the app
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN bun run build

# Build production image
FROM base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["bun", "start"]
