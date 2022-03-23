import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req,res) => {
        livros
            .find()
            .populate('autor')
            .populate('editora')
            .exec((error, livros) => {
                res.status(200).json(livros);
            });
    }

    static listarLivroPorId = (req,res) => {
        const {id} = req.params;

        livros
            .findById(id)
            .populate('autor')
            .populate('editora')
            .exec((error,livro) => {
                if(error){
                    res.status(400).send({message: `${error.message} - Id do livro não localizado.`});
                } else {
                    res.status(200).send(livro);
                }
            });
    }

    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body);

        livro.save((error) => {
            if(error){
                res.status(500).send({message: `${error.message} - Falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req,res) => {
        const {id} = req.params;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error){
                res.status(400).send({message: error.message});
            } else {
                res.status(200).send("Livro atualizado com sucesso!");
            }
        });
    } 

    static removerLivro = (req,res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, error => {
            if(error){
                res.status(500).send({message: error.message});
            } else {
                res.status(200).send("Livro removido com sucesso!");
            }
        });
    }

    static listarLivroPorEditora = (req,res) => {
        const {editora} = req.query;

        livros.find({'editora': editora}, {}, (error, livro) => {
            if(error){
                res.status(500).send({message: error.message});
            } else {
                res.status(200).send(livro);
            }
        })
    }
}

export default LivrosController;