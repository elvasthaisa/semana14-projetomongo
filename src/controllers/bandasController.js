const bandas = require('../models/bandas');

const getAll = (req, res) => {
    console.log(req.url);
    bandas.find(function(err, bandas) {
      if(err) {
        res.status(424).send({ message : err.message })
      }
      res.status(200).send(bandas);
    })
};

const getById = (req, res) => {

}

const getBandaByGenero = (req, res) => {
    console.log(req.url);
    clientes.find({ genero }, { banda: 1, genero: 1, formacao: 1, _id: 0 }, function(err, banda){
      if(err) {
        res.status(424).send({ message: err.message })
      } else if (bandas.length > 0) {
        res.status(200).send(banda)
      } else {
        res.status(404).send("O gênero não foi encontrado");
      }
    })
};


const postBanda = (req, res) => {
    console.log(req.body);

    let banda = new bandas(req.body);

    banda.save(function(err) {
      if(err) {
        res.status(424).send({ message: err.message })
      }
      res.status(201).send(banda)
    })
};

const updateBanda = (req, res) => {
    console.log(req.body);
}

const deleteBanda = (req, res) => {
    const id = req.params.id;

    banda.deletMany({ id }, function(err) {
      if(err) {
        res.status(424).send({ message: err.message})
      } else {
        res.status(200).send({ message: "Banda deletada com sucesso!"})
      }
    })
};

module.exports = {
    getAll,
    getById,
    getBandaByGenero,
    postBanda,
    deleteBanda,
    updateBanda
}
