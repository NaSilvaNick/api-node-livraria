import autores from "../models/Autor.js";

class AutoresController {
    
    static listarAutores = (req,res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores);
        });
    }

    static listarAutorPorId = (req,res) => {
        const {id} = req.params;

        autores.findById(id, (error,autor) => {
            if(error){
                res.status(400).send({message: `${error.message} - Id do autor não localizado.`});
            } else {
                res.status(200).send(autor);
            }
        });
    }

    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body);

        autor.save((error) => {
            if(error){
                res.status(500).send({message: `${error.message} - Falha ao cadastrar autor.`});
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req,res) => {
        const {id} = req.params;
        
        autores.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error){
                res.status(400).send({message: error.message});
            } else {
                res.status(200).send("Autor atualizado com sucesso!");
            }
        });
    } 

    static removerAutor = (req,res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, error => {
            if(error){
                res.status(500).send({message: error.message});
            } else {
                res.status(200).send("Autor removido com sucesso!");
            }
        });
    }
}

export default AutoresController;