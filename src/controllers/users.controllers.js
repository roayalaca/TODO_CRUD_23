const Users = require('../models/users.models');
const bcrypt =  require("bcrypt");

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashed = await bcrypt.hash(password, 10);
        await Users.create({ username, email, password: hashed });
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createUser
}