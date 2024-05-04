const bodyParser = require("body-parser");
const inteligencia = require("./artificial");

module.exports = app => {
    app.use(
        bodyParser.json(),
        inteligencia
    )
}