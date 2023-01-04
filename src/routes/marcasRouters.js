import express from "express";
import marcaController from "../controllers/marcasControllers.js";

const router = express.Router();

router
    .get('/marcas/:id', marcaController.listarMarcasID)
    .get('/marcas', marcaController.listarMarcas)
    .post('/marcas', marcaController.cadastrarMarcas)
    .put('/marcas/:id', marcaController.atualizarMarca)
    .delete('/marcas/:id', marcaController.deletarMarca)

export default router;