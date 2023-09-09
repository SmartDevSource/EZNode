var app = require("express")();
var express = require("express");
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

class Network{
    constructor(){
        console.log(__dirname);
        app.use(express.static(path.join(__dirname, '/public')));   
    }

    setMaxListeners = (maxListeners) => {
        io.setMaxListeners(maxListeners);
    }

    setClientPath = (path) => {
        app.use(express.static(path.join(__dirname, path)));   
    }

    setRootPage = (path) => {
        app.get("/", function(request, response){
            response.sendFile(__dirname + `/public/${path}`);
          });
    }

    start = (port) =>{
        http.listen(port, ()=>{
            console.log(`Serveur lancé sur le port ${port}`);
        });
    }

    handleReception = (callback) =>{

        process.on('SIGINT', function(){
            callback({header: "close", socket: "", content: ""});
            process.exit()
          });
          
        io.on('connection', (socket)=>{

            callback({header: "connection", socket: socket, content: ""});

            socket.on("disconnect", ()=>{
                callback({header: "disconnect", socket: socket, content: ""});

            })

            socket.onAny((eventName, data) =>{
                callback({header: eventName, socket: socket, content: data});
            })

        })
    }
    
}

module.exports = Network;