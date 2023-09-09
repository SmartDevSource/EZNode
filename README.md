# EZNode - Créez des applications Client / Serveur NODE en un clin d'œil ! :rocket:

![EZNode Logo](https://image.noelshack.com/fichiers/2023/36/6/1694287497-eznode.png)

EZNode est un outil puissant qui vous permet de créer rapidement des applications basées sur Node.js avec une architecture Client / Serveur. En une seule commande, vous pouvez générer un projet minimaliste et fonctionnel, prêt à être utilisé.

### Installation rapide via npx (recommandé) :rocket:

```bash
npx create-eznode MonApplication
```

:hammer_and_wrench: Quelques fonctions utiles

Définir la page racine à envoyer au client lorsqu'il arrive sur le site

```javascript
network.setRootPage("pages/index.html");
```

Lancez le serveur sur le port de votre choix (par exemple, 3000)
```javascript
network.start(3000);
```

Créez une boucle d'écoute pour la réception des sockets, explication détaillée :

```javascript
network.handleReception((data) => {
  const header = data.header; // Dénomination de la donnée
  const socket = data.socket; // Socket pour communiquer avec le client
  const content = data.content; // Contenu de la donnée (objet, tableau, etc.)
});
```
Un élément reçu peut être décortiqué comme suit :
```javascript
  data = {header: "xposition", socket: socket, content: "237"}

  ou par exemple si on réceptionne un objet :

  data = {header: "coordinates", socket: socket, content: {"xposition": 234, yposition: 179}}
```

:bulb: Une situation concrète :
```javascript
network.handleReception((data)=>{
    switch(data.header){
        case "close":
            console.log("Le serveur vient d'être déconnecté.");
        break;
        case "connection":
            console.log("Client connecté, l'ID unique de sa socket : "+data.socket.id);
        break;
        case "disconnect":
            console.log("Déconnection d'un client, l'ID de sa socket était : "+data.socket.id);
        break;
        case "username":
            console.log(`Vous avez reçu un nom d'utilisateur : ${data.content} !`);
            // On répond poliment à l'émetteur de la sorte //
            data.socket.emit("hello", `Salut à toi ${data.content} !`);
        break;
    }
```

Vous pouvez rajouter à loisir autant de case dans votre boucle switch avec les noms de headers que vous désirez ( il faudra que le client emploi les mêmes noms d'headers afin que l'échange des données puisse s'effectuer ).

A savoir, par défaut, il ne faut **JAMAIS** supprimer ou modifier les noms des 3 premiers éléments présents initialement au début de la boucle, à savoir **"close"**, **"connection"** et **"disconnect"** qui sont déjà incorporés dans le package.

Si vous souhaitez contribuer à l'amélioration de EZNode, n'hésitez pas à soumettre des pull requests ou à signaler des problèmes dans notre repository GitHub.

Projet en phase de lancement développé par Emmanuel Beaugendre.

:scroll: Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.

© 2023 EZNode. Tous droits réservés.
