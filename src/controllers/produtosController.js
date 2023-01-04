import produtos from "../models/Produto.js";

class produtoController{

    static listarProdutos = (req, res) => {
        produtos.find()
        .populate('marca')
        .exec((err, produtos) => {
            res.status(200).json(produtos)
        }) 
    }

    static listarProdutosID = (req, res) => {
        const id = req.params.id;

        produtos.findById(id)
        .populate('marca')
        .exec((err, produtos) => {
            if(!err){
                res.status(200).send(produtos);
            } else {
                res.status(400).send({message: `${err.message} - Produto não localizado!`});
            }
        })
    }

    static listarProdutosMarca = (req, res) => {
        const marca = req.query.marca

        produtos.find({'marca' : marca}, {}, (err, produtos) => {
            res.status(200).send(produtos);
        })
    }

    static cadastrarProdutos = (req, res) => {
        let produto = new produtos(req.body);

        produto.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto!`})
            } else {
                res.status(201).send(produto.toJSON());
            }
        });
    }

    static atualizarProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Produto atualizado com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Produto excluido com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

};

export default produtoController;