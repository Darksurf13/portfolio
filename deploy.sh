#!/bin/sh

# Assurez-vous d'être sur la branche main
git checkout main

# Mettez à jour votre copie locale
git pull origin main

# Construisez le projet (changez cette partie si votre commande de build est différente)
yarn build

# Copiez les fichiers de build dans un autre dossier
cp -r build/ ../build-temp

# Basculez vers la branche gh-pages
git checkout gh-pages

# Copiez les fichiers de build dans le répertoire actuel
cp -r ../build-temp/* .

# Ajoutez tous les fichiers
git add .

# Faites un commit
git commit -m "Mise à jour du site"

# Poussez les modifications vers la branche gh-pages
git push origin gh-pages

# Revenez à la branche main
git checkout main

