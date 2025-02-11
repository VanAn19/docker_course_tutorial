const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const Anim = require("./database/anim.model");
const connect = require("./database/connect");

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Hello World!");

    res.send("Hello World!");
});

app.get("/api/anime", async (req, res) => {
    const anime = await Anim.find();
    res.json(anime);
});

app.post("/api/anime", async (req, res) => {
    const anime = new Anim(req.body);
    await anime.save();
    res.json(anime);
});

app.listen(8000, () => {
    console.log("server listening on port 8000");
    connect();
});