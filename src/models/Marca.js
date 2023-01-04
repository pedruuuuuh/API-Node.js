import mongoose from "mongoose";

const marcaSchrema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const marcas = mongoose.model('marcas', marcaSchrema);

export default marcas;