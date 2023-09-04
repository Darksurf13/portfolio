export const data = [
  {
    id: 1,
    title: "Création d’une <strong>maquette</strong> avec Figma",
    description:
      "Création de la maquette de mon portfolio responsive avec le logiciel en ligne Figma en version DESKTOP, TABLETTE et MOBILE",
  },
  {
    id: 2,
    title:
      "<strong>Implementation</strong> d’une maquette en <strong>HTML5, CSS3, responsive  </strong>",
    description:
      "Implémentation de la maquette Figma BOOKI responsive (DESKTOP,TABLETTE,MOBILE): une plateforme d'agence de voyage  en HTML5/CSS3.",
  },
  {
    id: 3,
    title: "Rendre un site dynamique avec <strong>JAVASCRIPT</strong>",
    description:
      "Sur le portfolio de Sophie BLUEL,à l'aide de la documentation SWAGGER FOURNIE : création d'une page connexion pour l'utilisateur.br/> En mode connexion:utilisation de JASON WEB TOKEN ,changer certains éléments de la page d'accueil,  :affichage des logements,création d'une modale qui affiche tous les logements pour pouvoir créer ou supprimer un logement",
  },
  {
    id: 4,
    title: "<strong>Solution technique </strong>pour le site menuMaker",
    description:
      "Mener, préparer et planifier le projet de développement du site MenuMaker, permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics.<br/> Pour cela à partir des documents fournis : la maquette,le document des spécifications fonctionnelles, le tableau des User stories sur Notion, j'ai mis en place une veille technologique, les spécifications techniques,le KANBAN avec TRELLO et la solution technique.",
  },
  {
    id: 5,
    title:
      "<strong>Optimisation </strong>et <strong>debogage</strong> d’un site",
    description:
      "<strong><mark>DEBOGAGE</mark></strong> : <br/>Identification de 2 bugs au niveau de la gallerie d'images: <br/>les boutons de la navigation ne se colorent pas au clic et en cliquant sur une image, les flèches directionnelles sont bloquées, ne pouvant pas passer d'une image à l'autre.     <br/><br/>     <strong><mark>OPTIMISATION:</strong></mark>  <br/> IMAGES  <br/> J'ai optimisé les images avec l'application en ligne squoosh.app : en les compressant,les redimensionnant et en les convertissant au format WEBP.<br/> J'ai utilisé l'attribut srcset sur 2 images pour leur adaptation sur mobile.<br/> J’ai rajouté l’attribut loading avec la valeur lazy aux images que l’on ne voit pas au chargement de la page pour qu’elle se charge lors de leur apparition  :<br/> <br/> <strong>BALISAGE SEO</strong> <br/>j'ai rajouté la balise d'en-tete  et la balise.<br/>J'ai inclus des Google rich snippets(=contenus enrichis pour la recherche du site sur google et dans le but d’améliorer le <strong>référencement local </strong>(schéma.org).<br/> J'ai aussi rajouté la balise meta robots, la balise description, les balises metas de facebook et de twitter.<br/> J'ai rajouté l’attribut defer aux scripts pour un chargement différé.<br/> J’ai supprimé au maximum le code inutilisé à l’aide de l’outil COUVERTURE de GOOGLE DEV TOOLS pour certains fichiers et supprimés les fichiers qui ne servent à rien. <br/><br/><strong>ACCESSIBILITE:</strong><br/> J'ai amélioré l'accessibilité avec l'outil WAVE EVALUATION TOOLS :<br/>J’ai rajouté l’'attribut [lang] à la balise <HTML> . <br/>J’ai rajouté l’attribut ALT à toutes les images avec une description de chacune d’elle.<br/>J’ai changé la couleur du texte en noir du bouton par défaut de la lightbox.<br/>J’ai repris la structure des balises HTML pour incorporer un maximum de balises sémantiques à la place de la balise générique div.<br/>J’ai aussi repris les balises des titres en suivant un ordre cohérent.",
  },
  {
    id: 6,
    title: "Création d’un site web avec<strong> REACT.js </strong>",
    description:
      "Mission Frontend : Implémentation d'un site react.js à l'aide d'une maquette Figma.<br/>Installation de l'application avec CREATE REACT APP et de REACT ROUTER, du module SASS.<br/> <br/><u>Création de plusieurs pages :</u> <br/><mark><strong> page Home </strong></mark><br/> avec les cartes des logements, <br><mark><strong> page Logement </strong></mark>: <br/>avec les détails d un logement et notamment le composant Carrousel<br/><mark><strong> page à propos</strong></mark>:<br/> avec le composant Collapse <br/> <mark><strong> page404 </strong></mark> <br/> Lorsqu'une page n'existe pas, il y a une redirection automatique vers la page 404",
  },
  {
    id: 7,
    title:
      "<span>Création d’un <span style='color: blue;'>backend</span> avec <strong>NODE.js  EXPRESS.js <span> MongoDB</span></strong>",
    description:
      "Ma mission est de créer le backend d'un site de notation de livre dont le frontend est codé en REACT.js comprenant une  inscription et une conexion utilisateur : <br/>Chaque utilisateur pourra noter les livres, en ajouter (et aussi les modifier et de les supprimer). <br/> J'ai utilisé NODE.js yarn EXPRESS.js  et MongoDB pour la base de données. <br/> Avec MONGOOSE, J'ai crée 2 modeles, ainsi que leurs routes et leurs controllers respectifs <br/><br/> <u>Le modele user :</u> avec 2 routes<br/> Inscription<br/> Connexion<br/> <br/> <u>Le modèle BOOK avec :</u> 7 routes : <br/> Affichage de tous les livres sur la page d'accueil <br/> Affichage du détail d'un livre<br/> Créationd'un livre<br/> Notation d'un livre<br/> Modification d'un livre<br/> Suppression d'un livre<br/> Affichage des 3 livres ayant la meilleure note moyenne dans un ordre décroissant.<br/> Chaque image ajoutée ou modifiée sur le site est optimisée via le module sharp automatiquement.",
  },
  {
    id: 8,
    title:
      "Projet personnel :<span style='color: green;'> <strong>LINKUSWORLD </strong></span>",
    description:
      "Site personnel en cours de développeent hébergé chez IONOS et avec comme nom de domaine linkusworld.com.<br/> Il n'y a pour l'instant qu'un formulaire avec une demande de mot de passe pour accéder au site car ce projet est confidentiel pour l'instant mais sera developpé avec REACT.js pour le Frontend et NODE.js et EXPRESS.js pour le BACKEND.",
  },
];
