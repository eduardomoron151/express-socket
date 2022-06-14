const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerUsuarios } = require('../controllers/usuarios.controller');


const router = Router();

router.get('/', obtenerUsuarios);

// Ejemplo de ruta con express-validator y middlewares personalizados

// router.get('/', [
//     check('nombre', 'El nombre es de caracter obligatorio').not().isEmpty(),
//     check('password', 'El password es obligatorio y mayor de 6 caracteres').isLength({ min : 6}),
//     check('correo', 'El correo no es valido').isEmail(),
//     check('correo').custom(existeCorreo),
//     validarCampos
// ], usuariosPost)

module.exports = router;