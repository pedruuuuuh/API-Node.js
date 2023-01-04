import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    marca: {type: mongoose.Schema.Types.ObjectId, ref: 'marcas', required: true}
},
{
    versionKey: false
}
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;