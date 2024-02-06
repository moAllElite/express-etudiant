&# ETUDIANT EXPRESS CRUD APP 
[![npm version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/npm/v/10.2.4#npm---a-javascript-package-manager)
[![license](https://img.shields.io/npm/l/npm.svg)](https://npm.im/npm)
[![CI - cli](https://github.com/npm/cli/actions/workflows/ci.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/ci.yml)
[![Benchmark Suite](https://github.com/npm/cli/actions/workflows/benchmark.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/benchmark.yml)

Ceci est projet express-Mongo avec les opérations de base sur etudiants

## Configuration mininum requise
Pour l'installation du gestionnaire de dépendance `npm` vous aurez besoin d'une des versions suivante de Node.js :
-   18.x.x >= 18.17.0
-   20.5.0 our supérieure
## Installation de packages
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


### GET all students
```````
    http://localhost:3000/api/etudiants
```````
![Alt text](liste_des_etudiants.png)

### POST new student
```````
    http://localhost:3000/api/etudiants
```````
#### Ajout nouvel étudiant statut code 201 Created
![Alt text](new_student)
#### Contrainte de validation email Unique 
Exception level pour un statut code 400 Bad request sur un ajout d'un nouvel utilisateur
![Alt text](contrainte_unique_email)
### Find by Email
#### Succès avec statut code 200 OK
```````
    http://localhost:3000/api/etudiants/{email}
```````
![Alt text](find_by_email)
#### Exception  Not Found statut code 404
![Alt text](student_not_found)