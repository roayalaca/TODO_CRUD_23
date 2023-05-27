const { check, validationResult } = require("express-validator");

const createUserValidator = [
    check("username", "Error con el campo username")
    .exists()
    .withMessage("Falta enviar el username")
    .notEmpty()
    .withMessage("El campo username no debe de estar vacío")
    .isLength( { min: "10", max: "30" } )
    .withMessage("El username debe tener mínimo 10 caracteres y máximo 30"),
    check("email", "Error con el campo email")
    .exists()
    .withMessage("Falta enviar el email")
    .notEmpty()
    .withMessage("El campo email no debe de estar vacío")
    .isString()
    .withMessage("El campo email debe ser un string")
    .isEmail()
    .withMessage("El campo email debe tener formato de correo electrónico")
    .isLength( { min: "10", max: "50" } )
    .withMessage("El campo email debe tener mínimo 10 caracteres y máximo 50"),
    check("password", "Error con el campo password")
    .exists()
    .withMessage("Falta enviar el password")
    .notEmpty()
    .withMessage("El campo password no debe de estar vacío")
    .isString()
    .withMessage("El campo password debe ser un string")
    .isLength( { min: "8"} )
    .withMessage("El campo password debe tener mínimo 8 caracteres"),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(400).json(error);
        }
    },
];

module.exports = { createUserValidator }