const { request, response } = require("express");

const obtenerUsuarios = (req = request, res = response) => {

    // logica y respuesta
    res.status(200).send({
        msg : 'exitoso'
    });



}


module.exports = {
    obtenerUsuarios
}