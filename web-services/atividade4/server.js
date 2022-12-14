const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

// GET - READ
app.get("/livros", function(req, res) {
    res.json(data);
})

app.get("/livros/:id", function(req, res) {
    const { id } = req.params;
    const livro = data.find(liv => liv.id == id);

    if(!livro) return res.status(204).json();

    res.json(livro);
});

// POST - CREATE
app.post("/livros", function(req, res) {
    const { nome, autor, isbn } = req.body;
    // salvar
    res.json({ nome, autor, isbn });
});

// PUT - UPDATE
app.put("/livros/:id", function(req, res) {
    const { id } = req.params;
    const livro = data.find(liv => liv.id == id);

    if (!livro) return res.status(204).json();

    const { nome } = req.body;

    livro.nome = nome
    res.json(livro);
});

// DELETE 
app.delete("/livros/:id", function(req, res) {
    const { id } = req.params;
    const livrosFiltered = data.filter(livro => livro.id != id);

    res.json(livrosFiltered);
});

app.listen(3000, function() {
    console.log("Server is running!");
});