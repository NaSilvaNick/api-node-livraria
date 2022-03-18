import app from "./src/app.js"

const port = process.env.PORT || 3000;

const rotas = {
    '/': "Curso de Node",
    '/livros': "Entrei na página de livros",
    "/autores": "Listagem de autores",
    "/editora": "Págian de editora",
    "/sobre": "Informações sobre o projeto"
};

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});