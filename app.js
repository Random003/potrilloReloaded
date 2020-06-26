const chalk = require('chalk');

const express = require ("express");
const app = express();



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});


app.get("/esmacho", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});


app.get("/esparientedecelestecid", (req, res) => {
    res.sendFile(__dirname + "/views/no.html")
});


app.get("/germanesblasfemo", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/elpabloesvruto", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/losdinosauriosexisten", (req, res) => {
    res.sendFile(__dirname + "/views/talvez.html")
});

app.get("/elpotrilloesmacho", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/sosbabart", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/tenesolor", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/elpablotieneolor", (req, res) => {
    res.sendFile(__dirname + "/views/no.html")
});

app.get("/tegustaelipi", (req, res) => {
    res.sendFile(__dirname + "/views/talvez.html")
});

app.get("/deberiamosvisitarla", (req, res) => {
    res.sendFile(__dirname + "/views/si.html")
});

app.get("/escorrectoloquehago", (req, res) => {
    res.sendFile(__dirname + "/views/talvez.html")
});

app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html")
});

 console.log(__dirname);


app.listen(4000, () => { console.log(chalk.redBright("ENSERIO QUERES SABER SOBRE EL POTRILLO???, pone en el navegador esto: localhost:4000. Cuando quieras preguntar mas cosas agregale despues de la direccion / mas tu pregunta sin espacios"))});
