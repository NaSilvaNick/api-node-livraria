const http = require("http");
const port = 3000;

const rotas = {
    '/': "Curso de Node",
    '/livros': "Entrei na página de livros",
    "/autores": "Listagem de autores",
    "/editora": "Págian de editora",
    "/sobre": "Informações sobre o projeto"
};
    
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});