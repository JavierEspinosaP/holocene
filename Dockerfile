# Usar la imagen oficial de Node.js
FROM node:18-alpine

# Crear directorio de la aplicación
WORKDIR /app

# Copiar package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm y dependencias
RUN npm install -g pnpm && pnpm install

# Copiar el resto de los archivos
COPY . .

# Compilar TypeScript
RUN pnpm build

# Puerto expuesto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "start:prod"]
