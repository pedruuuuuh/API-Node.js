import marcas from "../models/Marca.js";

class marcaController{

    static listarMarcas = (req, res) => {
        marcas.find((err, marcas) => {
            res.status(200).json(marcas)
        })
    }

    static listarMarcasID = (req, res) => {
        const id = req.params.id;

        marcas.findById(id, (err, marcas) => {
            if(!err){
                res.status(200).send(marcas);
            } else {
                res.status(400).send({message: `${err.message} - Marca não encontrada!`});
            }
        })
    }

    static cadastrarMarcas = (req, res) => {
        let marca = new marcas(req.body);

        marca.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar a marca!` })
            } else {
                res.status(201).send(marca.toJSON());
            }
        });
     }

     static atualizarMarca = (req, res) => {
        const id = req.params.id;

        marcas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Marca atualizada com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
     }

     static deletarMarca = (req, res) => {
        const id = req.params.id;

        marcas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Marca excluida com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
     }

};

export default marcaController;