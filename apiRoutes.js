const router = require("express").Router();

const controllerNumber = require("../controller/controllerNumber");
router.post("/Par/", controllerNumber.checkPar);
router.post("/Primo/", controllerNumber.checkPrimo);

module.exports = router;
