<h1 align="center">FrenchGuessr</h1>

## Table des Matières

1. [Stack Technique](#stack-technique)
2. [Installation](#installation)

## Stack Technique

- PostgreSQL
- Flyway
- pgAdmin
- Nest.js (TypeScript)
- Angular (TypeScript)
- Docker
- Jest
- Jenkins
- Kubernetes

## Installation

Il suffit de modifier le nom du fichier `.env.exemple` en `.env` et de remplir les valeurs manquantes pour faire fonctionner le fichier `docker-compose.yml`.

⚠️ **Attention :** la variable PGADMIN_DEFAULT_EMAIL doit obligatoirement être au format adresse e-mail mais sa validité n'est pas vérifiée.

### Connexion de pgAdmin à la base de données PostgreSQL

Commencez par cliquer sur Ajouter un nouveau serveur.

![Connexion pgAdmin 1]()

Dans la fenêtre qui vient de s'ouvrir, entrez le nom de votre choix dans la case `Nom`.

![Connexion pgAdmin 2]()

Allez dans l'onglet connexion et entrez :

Dans la case `Nom d'hôte / Adresse` **DataBase**

Dans la case `Port` **5432**

Dans la case `Base de données de maintenance` La valeur de la variable **POSTGRES_DB** 

Dans la case `Nom utilisateur` La valeur de la variable **POSTGRES_USER** 

Dans la case `Mot de passe` La valeur de la variable **POSTGRES_PASSWORD** 

![Connexion pgAdmin 3]()