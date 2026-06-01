# Etap 1: Budowanie aplikacji (wersja Node dopasowana do Twojego środowiska)
FROM node:26-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etap 2: Produkcyjny, ultra-lekki serwer HTTP
FROM nginx:alpine AS runner
# Kopiujemy skompilowany statyczny HTML do katalogu Nginxa
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]