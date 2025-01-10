FROM node:20-alpine AS base

# Development stage
FROM base AS dev
WORKDIR /app

COPY ./ ./
RUN npm ci

# Build stage
FROM base AS build
RUN apk add --no-cache gcompat
WORKDIR /app

COPY package*.json tsconfig.json ./
COPY src/ ./src/
COPY static/ ./static/
RUN npm ci

RUN npm run build && \
    npm prune --production

# Runner stage
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 hono

COPY --from=build --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=build --chown=hono:nodejs /app/dist /app/dist
COPY --from=build --chown=hono:nodejs /app/package.json /app/package.json
COPY --from=build --chown=hono:nodejs /app/static /app/static

USER hono
EXPOSE 3000

CMD ["node", "/app/dist/index.js"]