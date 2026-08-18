const express = require("express");
const{
    listarProdutos,
    cadastrarProduto
} = require("../controllers/produtoController");

const router = express.Router();

// Lista os produtos -> Lógica feita no controller
router.get("/", listarProdutos);

// Cadastra produtos -> Lógica feita no controller
router.post("/", cadastrarProduto);

module.exports = router;