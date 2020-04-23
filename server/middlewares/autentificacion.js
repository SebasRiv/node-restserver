const jwt = require('jsonwebtoken');

//
// Verfiricar token
//

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

//
// Verifica AdminRole
//

let verificaAdmin_role = (req, res, next) => {

    let usuario = req.usuario;

    if(usuario.role != "ADMIN_ROLE") {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
    next();
};

//Verifica token para imagen

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
} 

module.exports = {
    verificaToken,
    verificaAdmin_role,
    verificaTokenImg
}