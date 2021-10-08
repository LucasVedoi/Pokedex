const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [];

let message = "";

app.get("/", (req, res) => {  

  setTimeout(() => {
    message = "";
  }, 1000);

    res.render("index", {pokedex, message});
});

app.get("/cadastro", (req, res) => { 
  res.render("../views/cadastro")});
  
  app.post("/new", (req, res) => {
    const pokemon = req.body;
    pokedex.push(pokemon);
    message = `Parabéns!! Seu Pokémon foi cadastrado com sucesso!`;
    res.redirect ("/")  
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("../views/detalhes", {pokemon,});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`));