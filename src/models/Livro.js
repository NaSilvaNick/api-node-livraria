import mongoose from "mongoose";

const livroSchema = mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: "Autores", required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: "Editoras", required: true},
        numeroPaginas: {type: Number}
    },
    {
        versionKey: false
    }
);

const livros = mongoose.model("Livros", livroSchema);

export default livros;