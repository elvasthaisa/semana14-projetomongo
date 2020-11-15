const express = require("express");
const router = express.Router();
const controller = require("../controllers/bandasController.js");

router.post("/", controller.postBanda);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/genero/:genero", controller.getBandaByGenero);
// router.delete("/:id", controller.deleteBanda);
router.put("/:id", controller.updateBanda);

module.exports = router;
