# ETUDIANT EXPRESS CRUD APP 
[![npm version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/npm/v/10.2.4#npm---a-javascript-package-manager)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=moAllElite_express-etudiant&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=moAllElite_express-etudiant)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=moAllElite_express-etudiant)](https://sonarcloud.io/summary/new_code?id=moAllElite_express-etudiant)
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=moAllElite_express-etudiant)

Ceci est projet express-Mongo avec les opérations de base sur etudiants

## Configuration mininum requise
Pour l'installation du gestionnaire de dépendance `npm` vous aurez besoin d'une des versions suivante de Node.js :
-   18.x.x >= 18.17.0
-   20.5.0 our supérieure
## Installation de Node Js
Rendez vous sur le site officiel de Node js pour le téléchargement
`https://nodejs.org/en`
## Installation des packages
-   Initialiser le projet express

     ```````
        npm init
    ```````
- Installer express 
    ```````
        npm install --save express
    ```````
- Installer nodemon pour le run en mode dev [documentation](https://www.npmjs.com/package/nodemon)
    ```````
        npm install -g nodemon # or using yarn: yarn global add nodemon
    ```````
- Installer mongoose [docs](https://mongoosejs.com/docs/index.html)
    ```````
        npm install mongoose --save
    ```````
-  Installer mongodb la document est disponible sur [documentations](https://cloud.mongodb.com/)
    ```````
        npm install mongodb --save
    ````````
- Installer body-parser [documentation](https://www.npmjs.com/package/body-parser)
    ````````
        npm i --save nodemon body-parser
    ````````
- Installer babel [documentaion](https://www.npmjs.com/package/@babel/preset-env)
    ``````
        npm install --save-dev babel-cli @babel/preset-env
    ``````
## Usage

Lancez le projet avec la commande en mode développeur et tapez  `http://localhost:3000/` le navigateur
    ````````
        npm run start:dev
    ````````
### Analyse qualité code avec SonarCloud
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/sonar.png)

![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/sonar-tab.png)

### GET all students
```````
    http://localhost:3000/api/etudiants
```````
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/liste_des_etudiants.png)

### POST new student
```````
    http://localhost:3000/api/etudiants
```````
#### Ajout nouvel étudiant statut code `201` Created
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/new_student.png)
#### Contrainte de validation email Unique 
Exception levé pour un statut code `400` Bad request sur un ajout d'un nouvel utilisateur
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/contrainte_unique_email.png)
### Find by Email
#### Succès avec statut code `200` OK
```````
    http://localhost:3000/api/etudiants/{email}
```````
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/find_by_email.png)
####  Not Found  exception avec statut code `404`
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/student_not_found.png)
### DELETE Eduiant par email statut code `204` `no content`
```````
    http://localhost:3000/api/etudiants/{email}
```````
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/delete-student-by-email.png)
#### Requête GET all student after 
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/after-delete.png)
#### Exception lévée avec un statut code `400` 
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/404-for-delete.png)
404-for-delete 
### PUT modification d'un étudiant par email
```````
    http://localhost:3000/api/etudiants/{email}
```````
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/put-success.png)
#### Email introuvable ou erreur du Update statut code `400` est envoyé
![Alt text](https://github.com/moAllElite/express-etudiant/blob/main/src/assets/put-failed.png)