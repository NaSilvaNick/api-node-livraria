import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nascionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("Autores", autorSchema);

export default autores;