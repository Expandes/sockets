const { io } = require('../server');


//Verificando conexión con el cliente - func flecha si funciona en node
io.on('connection', (client) => {

    //Al conectarse
    console.log('Servidor: Usuario conectado');

    //Enviando al cliente
    client.emit('enviarMensaje', {

        origen: 'Servidor',
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'

    });

    //En caso de desconexión
    client.on('disconnect', () => {
        console.log('Servidor: Usuario desconectado');
    })


    //Escuchando al cliente
    //Callback = si mensaje llegó al server
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {

        //     callback({
        //         resp: 'Servidor: Todo salió bien'
        //     });

        // } else {
        //     callback({
        //         resp: 'Servidor: Todo salió mal!!!!!'
        //     });
        // }



    });
});