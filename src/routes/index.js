const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        message: "Olá, venha conhecer o meu top 10 bandas de rock",
        version: "1.0.0"
    })
});

module.exports = router;