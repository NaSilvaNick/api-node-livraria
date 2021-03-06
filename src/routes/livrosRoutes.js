import express from "express";
import LivrosController from "../controller/LivrosController.js";

const livrosRoutes = express.Router();

livrosRoutes
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivroPorEditora)
    .get("/livros/:id", LivrosController.listarLivroPorId)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.removerLivro);

export default livrosRoutes;