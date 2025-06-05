FROM node:22-alpine AS base
WORKDIR /app
ENV NODE_ENV="production"
RUN npm install -g pnpm

FROM base AS build
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false
COPY . .
RUN pnpm run build

FROM node:22-alpine
RUN npm install -g http-server
COPY --from=build /app/dist /app/dist
EXPOSE 3000
CMD ["http-server", "/app/dist", "-p", "3000"]
