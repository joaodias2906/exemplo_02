var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");


router.get("/", (req, res) => {
    res.render("pages/index", { "erros": null, "resultado": null, "valores": { "semana": "digite o dia da semana" } });
});


router.post("/semana",
    router.post(
        "/index",
        body("dia").isLength({ min: 1, max: 1 })
            .withMessage("O dia deve ter apenas um digito!"),


        (req, res) => {

            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                console.log(erros);
                return res.render("pages/index", { "erros": erros, "valores": req.body, "resultado": null });
            }

            let dia = parseInt(req.body.dia);

            if (dia === 1) {
                var semana = "Domingo";
            } else if (dia === 2) {
                var semana = "Segunda";
            } else if (dia === 3) {
                var semana = "Terça";
            } else if (dia === 4) {
                var semana = "Quarta";
            } else if (dia === 5) {
                var semana = "Quinta";
            } else if (dia === 6) {
                var semana = "Sexta";
            } else if (dia === 7) {
                var semana = "Sabado";
            } else {
                var semana = "Valor invalido";
            };

            let objJson = { "semana": semana }

            res.render("pages/index", { "erros": null, "valores": req.body, "resultado": objJson });
        }));



module.exports = router;