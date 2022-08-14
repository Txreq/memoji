const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");
const cors = require("cors");
const path = require("path");

const app = express();
const server = http.createServer(app);

const api = require("./routes/api");
const BUILD_PATH = path.join(__dirname, "web", "build")
app.use(cors());
app.use(api);
app.use(express.static(BUILD_PATH))

app.get("/", (req, res) => {
    res.sendFile(BUILD_PATH + "/index.html")
})

server.listen(process.env.PORT, () => {
    console.log("We are good to go!");
});
