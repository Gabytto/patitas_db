//importacion del modulo http
const http = require('http');

//creación del servidor estático
const server = http.createserver((req, res) => {
    res.writehead(200, {
        'Content-Type' : 'text/plain'
    });
    res.end("hola mundo!");
});

//llamando a la función server

server.listen(3000,() => console.log('servidor corriendo en puerto http://localhost:3000'));
