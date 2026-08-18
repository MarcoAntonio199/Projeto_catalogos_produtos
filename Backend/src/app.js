const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORTA = 3000;

app.use(express.json());

app.use("/api/produtos", produtoRoutes);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});