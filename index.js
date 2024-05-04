const express = require("express");
const router = require("./src/routes");
const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors({
    origin: "https://potencialweb.com"
}))

router(app)

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port)
})