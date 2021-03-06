const express = require("express");
const cors = require('cors');
const server = express();
server.use(cors());

const movies = require("./src/data/movies/index.json");
const series = require("./src/data/series/index.json");
const animes = require("./src/data/animes/index.json");

const data = new Date();

server.get("/", (_, res) => {
    return res.json({DateHour: `${data.toLocaleDateString('pt-BR')} - ${data.toTimeString()}`})
})

server.get("/animes", (_, res) => {
    return res.json(animes)
})

server.get("/movies", (_, res) => {
    return res.json(movies)
})

server.get("/series", (_, res) => {
    return res.json(series)
})

server.listen(process.env.PORT || 9000, () => {
    console.log("Port 9000...")
})
