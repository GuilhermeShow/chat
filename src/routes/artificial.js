const { Router } = require("express");
const InteligenciaArtificial = require("../controller/InteligenciaArtificial");

const router = Router();

router.post("/chat", InteligenciaArtificial.chat);

module.exports = router;