const produtos = require("../data/produtos");

function listarProdutos (req, res){
 res.json(produtos);
}

function cadastrarProduto(req, res){
    // extrai dados do req.body (o qeu o usuário colocou nos campos)
    const {nome, descricao, preco} = req.body;


if (!nome || preco === undefined){
    return res.status(400).json({
        mensagem: "Nome e preço são obrigatorios."
    });
}
// Definição do objeto Produto
const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome,
    descricao: descricao || "",
    preco: Number(preco)
};

produtos.push(novoProduto);

res.status(201).json(novoProduto);
}

module.exports = {
    listarProdutos,
    cadastrarProduto
};