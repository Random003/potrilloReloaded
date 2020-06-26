
const express = require ("express");
const app = express();



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});


app.get("/productos", (req, res) => {
    res.sendFile(__dirname + "/views/productos.html")
});


app.get("/acerca-de", (req, res) => {
    res.sendFile(__dirname + "/views/acerca-de.html")
});


app.get("/contacto", (req, res) => {
    res.sendFile(__dirname + "/views/contacto.html")
});

app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html")
});

 console.log(__dirname);


app.listen(3001, () => { console.log("servidor andando")});
