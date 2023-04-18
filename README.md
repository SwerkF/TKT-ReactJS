
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) | ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) |
|:----------:|:-------------:|:----------:|:----------:|:----------:|:----------:|:--:|

# TKT-ReactJS - Client: Cerza ⚡

![Logo](https://www.anigaido.com/media/zoo_lieux/1-100/51/cerza-parc-des-safaris-hermival-les-vaux-xl.jpg)

Le project **TKT-ReactJS** est un projet réalisé en atelier professionnel. Il a pour but de répondre à la demande d'un client pour réaliser un site web en React. Dans cette AP, dans la peau d'un salarié de **l'entreprise TKT** situé à Paris, nous devons répondre au besoin du Zoo Cerza et réaliser une application de gestion de zoo.

**Cerza** est un parc zoologique situé dans la commune d'Hermival-les-Vaux créé en 1986 par Thierry Jardin, directeur du parc. Il accueille diverses animales sur 80 hectares.

## Features 🤩

- Administration
- API Rest
- Avertissement dans le zoo
- Authentification
- Encyclopédie du zoo
- Gestion des missions
- Mise à jour de la santé d'un animal
- Missions à effectuer par le personnel

## Installation 💻

Avant toute chose, pour utiliser l'API en local, il faut installer une extension [Cors Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino). Malheuresement, la configuration du cors n'est pas faite pour cette API.

Télécharger le projet git, de préférence sur votre serveur local (Xampp, Wamp, MAMP).
La base de données se trouve dans `./api/bdd/zoo.sql`. Veuillez créer sur votre server, une base de données `zoo` et importer le fichier `zoo.sql`.

### Installation des packages React  
```bash
  git clone https://github.com/SwerkF/TKT-ReactJS
  cd TKT-ReactJS
```

Installer les packages pour React
```bash
  npm install
```

### Installer les packages pour l'API

> Si votre API est dans le dossier TKT-React JS*
```bash
  npm install
```

> Si votre API est dans un autre dossier, rendez vous dans celui là
```bash
  cd path/to/API
  npm install
```

Lancer le projet / api :
```
  npm start
```

Pour se connecter au site, utilisez les comptes suivant :

Admin -> admin:admin123
Vétérinaire -> veto:veto123
Aide soignant -> soin:soin123

## API Reference 🧠

Exemples de requête d'API :
#### Retourner la liste des animaux du parc.
```http
  GET /api/encyclopedie
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *null* | *null* | Aucun paramètre. |

#### Retourner un animal

```http
  GET /api/encyclopedie/animal/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. L'ID de l'animal |

#### Inserer un avertissement.

```http
  POST /api/avertissement/insert
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `libelle`      | `string` | **Required**. Libelle de l'avertissement |
| `date`      | `string` | **Required**. Date du début |
| `niveau`      | `string` | **Required**. Etat (Default: 1) |
| `niveau`      | `string` | **Required**. Niveau de l'avertissement |

*ect...*

Pour le reste de l'API, rendez vous dans `./api/apiRouter` et `./api/apiRouter/routes`

## Auteurs 👑

- [Oliwer Skweres](https://www.github.com/SwerkF) 
- [Esteban Soufflard](https://www.github.com/Este027)
- [Thomas Letellier](https://github.com/thomasl28500)
- [Clément Duchene](https://github.com/duchenec-coder)

