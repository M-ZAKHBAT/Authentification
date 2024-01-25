# Authentification
Projet d'Authentification avec Express.js et MongoDB
Ce projet met en œuvre un système d'authentification complet avec Express.js et MongoDB, intégrant également des opérations CRUD pour les utilisateurs et les recettes.

Fonctionnalités
Authentification utilisateur : Permet à un utilisateur de se connecter avec son email et mot de passe.
Enregistrement utilisateur : Permet à un nouvel utilisateur de créer un compte.
Réinitialisation de mot de passe : Offre la possibilité à un utilisateur de réinitialiser son mot de passe en cas d'oubli.
Validation JWT : Utilise JSON Web Tokens (JWT) pour l'authentification, assurant la sécurité des routes sensibles.
Opérations CRUD : Inclus les fonctionnalités de création, lecture, mise à jour et suppression (CRUD) pour les utilisateurs et les recettes.
Architecture du Projet
auth.service.js : Contient la logique métier pour l'authentification, y compris les méthodes de connexion, d'enregistrement et de réinitialisation de mot de passe.
auth.controller.js : Fournit des interfaces pour les routes d'authentification, utilisant les méthodes fournies par auth.service.js.
routeAuth.js : Définit les routes d'authentification avec Express.js, utilisant auth.controller.js pour gérer les requêtes.
auth.js : Middleware pour valider les jetons JWT envoyés avec les requêtes, assurant l'accès sécurisé aux ressources protégées.
DbConnexion.js : Gère la connexion à la base de données MongoDB à l'aide de Mongoose.
user.service.js : Contient la logique métier pour les opérations CRUD sur les utilisateurs.
user.controller.js : Fournit des interfaces pour les routes relatives aux utilisateurs, utilisant les méthodes fournies par user.service.js.
user.schema.js : Définit le schéma MongoDB pour les utilisateurs.
user.route.js : Définit les routes pour les opérations CRUD sur les utilisateurs avec Express.js.
recipe.service.js : Contient la logique métier pour les opérations CRUD sur les recettes.
recipe.controller.js : Fournit des interfaces pour les routes relatives aux recettes, utilisant les méthodes fournies par recipe.service.js.
recipe.schema.js : Définit le schéma MongoDB pour les recettes.
recipe.route.js : Définit les routes pour les opérations CRUD sur les recettes avec Express.js.
Prérequis
Avant de commencer, assurez-vous d'avoir installé les dépendances suivantes :

Node.js
MongoDB
Express.js
Installation
Clonez ce dépôt sur votre machine locale.
Assurez-vous que MongoDB est en cours d'exécution sur votre machine.
Exécutez npm install pour installer toutes les dépendances du projet.
Configurez les variables d'environnement dans un fichier .env en définissant url pour l'URL de connexion à votre base de données MongoDB.
Utilisation
Exécutez npm start pour lancer le serveur.
Le serveur écoutera par défaut sur le port 3000.
Utilisez les endpoints suivants pour interagir avec l'API :
/login : Pour l'authentification des utilisateurs.
/register : Pour l'enregistrement de nouveaux utilisateurs.
/recipes : Pour les opérations CRUD sur les recettes.
Contribution
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez soumettre une pull request en indiquant clairement les changements que vous proposez.

Auteurs
Ce projet a été réalisé par ZAKHBAT Mohammed
