const path = require('path');

const express = require('express');
const cors = require('cors');
const { createServer } = require('http');

const { socketControlador } = require('../sockets/controller')


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.rutas = {
            // definimos las rutas aca
            usuarios : '/api/usuarios'
        }

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

        // Sockets
        this.sockets();

    }

    middlewares() {

        // cors
        this.app.use(cors());

        // Parseo del body a json
        this.app.use(express.json());

        // Exposicion de carpeta public
        this.app.use(express.static(path.join(__dirname, '/../public')));


    }

    routes() {

        // ruta de ejemplo
        this.app.use(this.rutas.usuarios, require('../routes/usuarios.routes'));

    }

    sockets() {

        this.io.on('connection', (socket) => socketControlador(socket, this.io));

    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;