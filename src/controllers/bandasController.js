const bandas = require('../models/bandas');

const getAll = (req, res) => {
    console.log(req.url);
    bandas.find(function(err, bandas) {
      if(err) {
        return res.status(424).send({ message : err.message })
      }
      return res.status(200).send(bandas);
    })
};

// const getById = (req, res) => {
//   const id = req.params.id;

//   bandas.find({ id }, { banda: 1, genero: 1, integrantes: 1,  formacao: 1, _id: 0 }, (err) => {
//     if (err) {
//       return res.status(424).send({ message: err.message })
//     } else if (bandas.length > 0) {
//       return res.status(200).send(bandas)
//     } else {
//       return res.status(404).send("O id não foi encontrado")
//     }
//   })
// }

const getBandaByGenero = (req, res) => {
    console.log(req.url);
    bandas.find({ genero }, { banda: 1, genero: 1, integrantes: 1,  formacao: 1, _id: 0 }, function(err, banda){
      if(err) {
        return res.status(424).send({ message: err.message })
      } else if (bandas.length > 0) {
        return res.status(200).send(bandas)
      } else {
        return res.status(404).send("O gênero não foi encontrado");
      }
    })
};


const postBanda = (req, res) => {
    console.log(req.body);

    let banda = new bandas(req.body);

    banda.save(function(err) {
      if(err) {
        return res.status(424).send({ message: err.message })
      }
      return res.status(201).send(banda)
    })
};

const updateBanda = (req, res) => {
    const id = req.params.id;
    console.log(id);

    bandas.updateMany({ id }, { $set: req.body }, function (err) {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        return res.status(200).send(bandas)
      }
    })
}

// const deleteBanda = (req, res) => {
//     const id = req.params.id;

//     bandas.deleteMany({ id }, function(err) {
//       if(err) {
//         return res.status(424).send({ message: err.message})
//       } else {
//         return res.status(200).send(bandas)
//       }
//     })
// };

module.exports = {
    getAll,
    // getById,
    getBandaByGenero,
    postBanda,
    // deleteBanda,
    updateBanda
}
