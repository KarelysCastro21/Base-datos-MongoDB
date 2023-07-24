const User = require("../models/usuarios");

const usuariosGet = (req, res) => {
    const { nombre, apellido, color } = req.query;

    res.json({
        msg: "get API - ususariosGet",
        nombre,
        apellido,
        color,
    });
};

const usuariosSaludo = (req, res) => {
    const { nombre, apellido } = req.params;
    res.json({
        msg: `Hola ${nombre} ${apellido}!`
    });
};

const usuariosPost = async (req, res) => {

    const body = req.body;
    const newUser = new User(body)

    await newUser.save();

    res.json({
        msg: "post API - usuariosPost",
        newUser
    });
};

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "put API - usuariosPut",
        id,
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete API - usuariosDelete",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosSaludo,
};
