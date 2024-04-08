const db = require("./banco")

const Agendamentos = db.sequelize.define("Agendar", {
    nome:{
        type: db.Sequelize.STRING
    },
    idade:{
        type: db.Sequelize.INTEGER
    }
})

// Agendamentos.sync({force:true})

module.exports = Agendamentos