const Sequelize = require("sequelize")
const sequelize = new Sequelize("agendamentos", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}