# ============================================
# Dockerfile untuk Tel-U Run 2026
# Next.js 16 + TypeScript + App Router
# Multi-stage build optimized
# ============================================

# Stage 1: Install ALL dependencies (termasuk devDependencies untuk build)
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install SEMUA dependencies (termasuk devDependencies untuk build)
RUN npm ci

# Stage 2: Build aplikasi
FROM node:20-alpine AS builder
WORKDIR /app

# Copy semua file source
COPY . .

# Copy node_modules dari stage deps (sudah termasuk TypeScript)
COPY --from=deps /app/node_modules ./node_modules

# Build Next.js (butuh TypeScript dari devDependencies)
RUN npm run build

# Stage 3: Production runner (minimal size)
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment production
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Buat user non-root untuk keamanan
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy hanya file yang diperlukan untuk production
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Ganti ke user nextjs (bukan root)
USER nextjs

# Expose port
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]