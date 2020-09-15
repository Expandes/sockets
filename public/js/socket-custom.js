var socket = io();
socket.on('connect', function() {

    console.log('Cliente: Conectado al servidor');

});

//Escuchar información de desconexión
socket.on('disconnect', function() {

    console.log('Cliente: Perdimos conexión con el servidor');

});


//Emitir información  (nombreEvento,objeto,callback_todo_ok)
//resp = respuesta del servidor a la emisión

socket.emit('enviarMensaje', {

    usuario: 'Edilberto',
    mensaje: 'Hola Mundo'

}, function(resp) {
    console.log('Cliente emitiendo: respuesta server:', resp);
});

//Escuchar información

socket.on('enviarMensaje', function(mensaje) {

    console.log('Cliente escuchando: Servidor: ', mensaje);

})