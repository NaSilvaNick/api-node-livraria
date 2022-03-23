import express from "express";
import EditorasController from "../controller/EditorasController.js";

const editorasRoutes = express.Router();

editorasRoutes
    .get("/editoras", EditorasController.listarEditoras)
    .get("/editoras/:id", EditorasController.listarEditoraPorId)
    .post("/editoras", EditorasController.cadastrarEditora)
    .put("/editoras/:id", EditorasController.atualizarEditora)
    .delete("/editoras/:id", EditorasController.removerEditora);

export default editorasRoutes;