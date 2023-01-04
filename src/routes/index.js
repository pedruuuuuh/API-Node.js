import express from "express";
import marcas from "../routes/marcasRouters.js";
import produtos from "../routes/produtosRouters.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Loja de Produtos'});
    });

app.use(
    express.json(),
    produtos,
    marcas
  )
}

export default routes;
