const express = require('express');

//socketIO requiere de http, por eso lo importamos
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

//Vincular server http con express para tener todas las configuración
//de express en "server"
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


//Inicializar socketIO
// IO = esta es la comunicación del backend 
// http://localhost:3000/socket.io/socket.io.js  (ruta en navegador para probar configuración de socketIO)

//let io = socketIO(server);

module.exports.io = socketIO(server);
require('./sockets/socket');



//Ponemos server para tener todo junto

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});