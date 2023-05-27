const db = require('../utils/database')

const { DataTypes } = require('sequelize');

const ToDos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    
    description:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },

    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: "user_id",
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: "category_id",
        allowNull: false,
    },
    }, {
    timestamps: false
    }
);

module.exports = ToDos;