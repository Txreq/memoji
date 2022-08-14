const express = require("express");
const path = require("path")
const fs = require("fs")

const properties = require("../db/properties.json");
const memojis = require("../db/data.json");

const api = express.Router();
const curDir = __dirname.replace("routes", "")

api.use(express.urlencoded({ extended: true }))

const objHandler = (obj, req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(obj));
};

api.get("/api/:gender/:name", (req, res) => {
    let name = req.params.name;
    let gender = req.params.gender;

    let filePath = path.join(curDir, "assets", gender, name + ".png");

    let fd = fs.open(filePath, "r", (err) => {
        if (err)
            res.writeHead(404)    
        res.sendFile(filePath)
    });
});

const randomElement = (array=Array) => {
    let rnd = Math.floor(Math.random() * array.length - 1) + 1
    return [rnd, array[rnd]]
}

api.get("/api/random", (req, res) => {
    const rndGenderPath = path.join(curDir, "assets", randomElement(properties.genders)[1].toLowerCase())
    fs.readdir(rndGenderPath, (err, files) => {
        if(err)
            res.writeHead(404)

        let rndImagePath = path.join(rndGenderPath, randomElement(files)[1])
        
        res.sendFile(rndImagePath)
    })
})

api.get("/api/allProperties", (req, res) => objHandler(properties, req, res));
api.get("/api/memojis", (req, res) => objHandler(memojis, req, res));

module.exports = api;
