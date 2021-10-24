const express = require("express");
const cors = require('cors');
const server = express();
server.use(cors());

//Conexão com o Banco de Dados

const mysql = require("mysql");

var connectionDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cinemovie"
})

connectionDB.connect((err) => {
    if (err) {
        console.error("Erro na conexão", err.stack)
        return;
    }

    console.log("Conectado ao ID", connectionDB.threadId)
});

const movies = require("./src/data/movies/index.json");
const series = require("./src/data/series/index.json");
const animes = require("./src/data/animes/index.json");

const data = new Date();
const day = data.getDate();
const month = data.getUTCMonth();
const year = data.getUTCFullYear();

const hours = data.getHours();
const minutes = data.getMinutes();

server.get("/", (req, res) => {
    return res.json({DateHour: `${day}/${month + 1}/${year} - ${hours}:${minutes}`})
})

server.get("/animes", (req, res) => {
    return res.json(animes)
})

server.get("/filmes", (req, res) => {
    return res.json(movies)
})

server.get("/series", (req, res) => {
    return res.json(series)
})

server.listen(9000, () => {
    console.log("Port 9000...")
})