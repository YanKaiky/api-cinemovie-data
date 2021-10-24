const Sequelize = require("Sequelize");
const sequelize = new Sequelize('cinemovie', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate()
    console.log("Conectado com sucesso")
} catch(error) {
    console.log("Falha ao se conectar", error)
}