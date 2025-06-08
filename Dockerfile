# =================================================================
# STAGE 1: Build - 编译阶段
# 使用 Node.js 官方镜像作为编译环境
# =================================================================
FROM node:20-alpine AS build

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm 的锁文件
# 这样做可以更好地利用 Docker 缓存
COPY package.json pnpm-lock.yaml ./

# 使用 pnpm 安装项目所有依赖
# pnpm 会自动处理 devDependencies
RUN pnpm install

# 复制项目所有源代码到工作目录
COPY . .

# 运行 build 命令来编译应用
RUN pnpm run build

# =================================================================
# STAGE 2: Production - 生产阶段
# 使用轻量级的 Nginx 镜像来提供服务
# =================================================================
FROM nginx:alpine AS production

# 将编译阶段生成的静态文件从 build 镜像复制到 Nginx 的网站根目录
# `dist/*/browser` 使用通配符 `*` 来匹配你项目在 dist 目录下的名称
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
# 这个配置文件对于处理 Angular 的前端路由至关重要
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露容器的 80 端口
EXPOSE 80

# Nginx 镜像的默认命令会自动启动服务, 无需额外添加 CMD
