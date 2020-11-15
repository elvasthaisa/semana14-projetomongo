const bandas = require('../models/bandas');

const getAll = (req, res) => {
    console.log(req.url);
    bandas.find(function(err, banda) {
      if(err) {
        return res.status(424).send({ message : err.message })
      }
      return res.status(200).send(banda);
    })
};

const getById = (req, res) => {
  const id = req.params.id;

  bandas.find({ id }, { banda: 1, genero: 1, integrantes: 1,  formacao: 1, _id: 0 }, (err, banda) => {
    if (err) {
      return res.status(424).send({ message: err.message })
    } else if (bandas.length > 0) {
      return res.status(200).send(banda)
    } else {
      return res.status(404).send("O id não foi encontrado")
    }
  })
}

const getBandaByGenero = (req, res) => {
    console.log(req.url);
    bandas.find({ genero }, { banda: 1, genero: 1, integrantes: 1,  formacao: 1, _id: 0 }, function(err, banda){
      if(err) {
        return res.status(424).send({ message: err.message })
      } else if (banda.length > 0) {
        return res.status(200).send(banda)
      } else {
        return res.status(404).send("O gênero não foi encontrado");
      }
    })
};


const postBanda = (req, res) => {
    console.log(req.body);

    let bandas = new bandas(req.body);
    console.log(bandas)

    bandas.save(function(err, banda) {
      if(err) {
        return res.status(424).send({ message: err.message })
      }
      return res.status(201).send(banda)
    })
};

const updateBanda = (req, res) => {
    const id = req.params.id;
    console.log(id);

    bandas.updateMany({ id }, { banda: 1, genero: 1, integrantes: 1,  formacao: 1, _id: 0 }, function (err, bandas) {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        return res.status(200).send(bandas)
      }
    })
}

const deleteBanda = (req, res) => {
    const id = req.params.id;

    bandas.deleteMany({ id }, function(err, banda) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(banda)
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
