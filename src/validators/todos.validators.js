const { check, validationResult } = require("express-validator");

const toDoValidator = [
    check("title", "Error con el campo title")
    .exists()
    .withMessage("Falta enviar el username")
    .notEmpty()
    .withMessage("El campo username no debe de estar vacío")
    .isString()
    .withMessage("El campo title debe ser un string")
    .isLength( { min: "10", max: "50" } )
    .withMessage("El username debe tener mínimo 10 caracteres y máximo 30"),
    check("description", "Error con el campo description")
    .exists()
    .withMessage("Falta enviar la description")
    .notEmpty()
    .withMessage("El campo description no debe estar vacío")
    .isString()
    .withMessage("El campo description debe ser un string"),
    check("categoryId", "Error con el campo categoryId")
    .exists()
    .withMessage("Falta enviar el categoryId")
    .notEmpty()
    .withMessage("El campo categoryId no debe de estar vacío"),
    check("userId", "Error con el campo userId")
    .exists()
    .withMessage("Falta enviar el userId")
    .notEmpty()
    .withMessage("El campo userId no debe de estar vacío"),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(400).json(error);
        }
    },
];

module.exports = { toDoValidator }