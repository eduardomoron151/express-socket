// Solo para desarrollo se llama el socket, para el tipado
const { Socket } = require("socket.io");

const socketControlador = async(socket = new Socket(), io) => {

    console.log('Socket conectado', socket.id);

}


module.exports = {
    socketControlador
}
