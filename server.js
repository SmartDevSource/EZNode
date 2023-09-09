const Network = require("./network");

const network = new Network();

network.setMaxListeners(0);
network.setRootPage("pages/index.html");
network.start(3000);

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
        case "message":
            console.log(`Message reçu : "${data.content}"` );
            data.socket.emit("message", `J'ai bien reçu ton message qui est "${data.content}".`);
        break;
    }
})