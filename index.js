const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./data",
    flowFile: "flows.json",
    functionGlobalContext: {}
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 1880, () => {
    console.log("Node-RED está rodando na porta " + (process.env.PORT || 1880));
});

RED.start();
