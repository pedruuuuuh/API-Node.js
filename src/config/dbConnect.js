import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedruuuuuh:2398PHsc@loja.nrsg3ly.mongodb.net/projeto-Node");

let db = mongoose.connection;

export default db;