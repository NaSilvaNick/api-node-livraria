import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true} ,
        numero: {type: Number},
    },
    {
        versionKey: false
    }
);

const editoras = mongoose.model("Editoras", editoraSchema);

export default editoras;