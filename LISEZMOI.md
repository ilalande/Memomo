# MEMOMO - taleau pense-bête

## Sommaire

1. [Informations générales](#Informations-générales)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Autrice](#autrice)

## Informations générales

Cette WebApp est un tableau pense-bête. Il permet de créer des listes de mémos divers.
Cette WebApp a été développé dans le cadre d'une période d'autoformation à NextJS 13 (le dossier app, les server components), à [l'éco-conception de sites web](https://github.com/cnumr/best-practices) et au développement respectant les critères d'accessibilité du [RGAA](https://accessibilite.numerique.gouv.fr/methode/introduction/) - mis en oeuvre après avoir suivi la [formation d'Access42](https://formations.access42.net/formations/formation-developpement-accessible/).
Elle est développée sur [NextJS](https://nextjs.org/) pour la partie front. La [partie back est disponible sur github](https://github.com/ilalande/memomoBack) (elle a été développée en ExpressJS et TypeScript).
Cette application est donc développée à but pédagogique et n'a jamais été lancée en production.

## Technologies

Ce projet est développé en **NextJS**

**Principales librairies utilisées:**
Afin de respecter les [critères d'un site éco-responsable](https://github.com/cnumr/best-practices).

- `Axios` a été utilisé pour gérer les appels API de l'application (dossiers "request" pour l'appel et Pages/api pour voir les apis appelées par http://localhost3000/api)
- `TypeScript` sera utilisé dans une future version.

## Installation

### Pour commencer un projet

- Cloner ce dépôt et la [partie Back](https://github.com/ilalande/memomoBack/blob/main/README.md), se rendre à l'intérieur
  Lancer la commande npm run build

- Configurer le fichier .env (à ajouter dans gitignore)

- Ouvrir (http://localhost:3000) avec un navigateur pour voir le résultat.

### Liste des commandes et signification

- `npm run build` : Initialisation du frontend et du backend ainsi que des outils
- `npm run dev` : Démarrage du serveur de éveloppement

## Autrice

[Juliane Casier](https://www.linkedin.com/in/juliane-casier-bb642832/)
