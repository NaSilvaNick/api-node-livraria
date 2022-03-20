import express from "express";
import AutoresController from "../controller/AutoresController.js";

const autoresRoutes = express.Router();

autoresRoutes
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarAutorPorId)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/:id", AutoresController.atualizarAutor)
    .delete("/autores/:id", AutoresController.removerAutor);

export default autoresRoutes;