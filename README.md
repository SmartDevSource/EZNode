# EZNode - Créez des applications Client / Serveur NODE en un clin d'œil ! :rocket:

![EZNode Logo](https://image.noelshack.com/fichiers/2023/36/6/1694287497-eznode.png)

EZNode est un outil puissant qui vous permet de créer rapidement des applications basées sur Node.js avec une architecture Client / Serveur. En une seule commande, vous pouvez générer un projet minimaliste et fonctionnel, prêt à être utilisé.

## :package: Installation

Pour installer EZNode, vous pouvez utiliser npm ou npx, en fonction de vos besoins :

### Installation globale via npm (recommandé) :computer:

```bash
npm install -g create-eznode
Installation locale via npx :inbox_tray:
bash
Copy code
npx create-eznode MonApplication
:hammer_and_wrench: Utilisation
EZNode simplifie le développement d'applications Client / Serveur en fournissant des fonctions côté serveur faciles à utiliser. Voici comment vous pouvez commencer :

Définir la page racine à envoyer au client lorsqu'il arrive sur le site :page_with_curl:
javascript
Copy code
network.setRootPage("pages/index.html");
Lancez le serveur sur le port de votre choix (par exemple, 3000) :rocket:
javascript
Copy code
network.start(3000);
Créez une boucle d'écoute pour la réception des sockets :ear:
javascript
Copy code
network.handleReception((data) => {
  // Votre code de traitement ici
  // Par exemple, accédez aux données reçues comme suit :
  const header = data.header; // Dénomination de la donnée
  const socket = data.socket; // Socket pour communiquer avec le client
  const content = data.content; // Contenu de la donnée (objet, tableau, etc.)
  
  // Ajoutez votre logique de traitement ici...
});
Grâce à EZNode, le traitement des données côté serveur devient simple et efficace.

:bulb: Exemple d'élément reçu
Un élément reçu peut être décortiqué comme suit :

javascript
Copy code
data.header = "username"; // Dénomination de la donnée
data.socket = socket; // Socket pour communiquer avec le client
data.content = "JohnDoe"; // Contenu de la donnée (exemple : nom d'utilisateur)
:handshake: Contribuer
Si vous souhaitez contribuer à l'amélioration de EZNode, n'hésitez pas à soumettre des pull requests ou à signaler des problèmes dans notre repository GitHub.

:scroll: Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.

© 2023 EZNode. Tous droits réservés.

vbnet
Copy code

Vous pouvez copier ce texte Markdown et le coller dans un fichier README.md 
