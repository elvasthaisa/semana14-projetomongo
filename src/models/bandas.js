const mongoose = require('mongoose')

//estrutura do model (atributos da sua entidade)
const bandasSchema = new mongoose.Schema({
    id : { type: Number },
    banda : { type: String },
    genero : { type: String },
    integrantes : { type: Array },
    formacao : { type: Number }
}, {
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

const bandas = mongoose.model('bandas', bandasSchema)

//exportar o model para ser utilizado
module.exports = bandas