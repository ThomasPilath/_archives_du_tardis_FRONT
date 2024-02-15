# Premiére étape pour construire l'app
FROM node:latest as BUILD_STAGE
LABEL maintainer="pilath.thomas@ikmail.com"
# Adapter la timezone du server a la timezone locale (pour les logs)
RUN apt-get update && apt-get install -y tzdata
ENV TZ=Europe/Paris
RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime
# Exposition du port 3300
EXPOSE 3300
# Répertoire de travail dans le conteneur
WORKDIR /app
# Copie des fichiers package.json
COPY package.json ./
# Installation des dépendances
RUN npm install
# Copie du reste des fichiers
COPY . ./
# Commande de démarrage de l'application
RUN npm run build

# Deuxiéme étape pour ne garder que le necessaire
FROM node:latest
# Répertoire de travail dans le conteneur
WORKDIR /app
# Adapter la timezone du server a la timezone locale (pour les logs)
RUN apt-get update && apt-get install -y tzdata
ENV TZ=Europe/Paris
RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime
# Faire en sorte de garder que le build de l'app
COPY --from=BUILD_STAGE /app/dist ./
COPY --from=BUILD_STAGE /app/node_modules ./node_modules
COPY --from=BUILD_STAGE /app/package.json ./package.json
# Définir les variables d'environnement
ARG API_BASE_URL
ENV API_BASE_URL=${API_BASE_URL}
# Commande de lancement de l'app
CMD ["npm", "run", "start"]
