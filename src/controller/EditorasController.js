import editoras from "../models/Editora.js";

class EditorasController {
    
    static listarEditoras = (req,res) => {
        editoras.find((error,editoras) => {
            if(error){
                res.status(400).send({message: error.message});
            } else {
                res.status(200).send(editoras);
            }
        });
    }

    static listarEditoraPorId = (req,res) => {
        const {id} = req.params;

        editoras.findById(id, (error,editora) =>{
            if(error){
                res.status(400).send({message: `${error.message} - Id da Editora não localizado.`});
            } else {
                res.status(200).send(editora);
            }
        });
    }

    static cadastrarEditora = (req,res) => {
        const editora = new editoras(req.body);

        editora.save((error) => {
            if(error){
                res.status(500).send({message: `${error.message} - Falha ao cadastrar editora.`});
            } else {
                res.status(201).send(editora.toJSON());
            }
        });
    }

    static atualizarEditora = (req,res) => {
        const {id} = req.params;

        editoras.findByIdAndUpdate(id, {$set: req.body}, error => {
            if(error){
                res.status(400).send({message: error.message});
            } else {
                res.status(200).send("Editora atualizada com sucesso!");
            }
        });
    }

    static removerEditora = (req,res) => {
        const {id} = req.params;

        editoras.findByIdAndDelete(id, error => {
            if(error){
                res.status(500).send({message: error.message});
            } else {
                res.status(200).send("Editora removida com sucesso!");
            }
        })
    }
}

export default EditorasController;