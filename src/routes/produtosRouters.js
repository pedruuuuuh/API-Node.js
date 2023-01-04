import express from "express";
import produtoController from "../controllers/produtosController.js";

const router = express.Router();

router 
    .get('/produtos/busca', produtoController.listarProdutosMarca)
    .get('/produtos/:id', produtoController.listarProdutosID)
    .get('/produtos', produtoController.listarProdutos)
    .post('/produtos', produtoController.cadastrarProdutos)
    .put('/produtos/:id', produtoController.atualizarProduto)
    .delete('/produtos/:id', produtoController.deletarProduto)

export default router;