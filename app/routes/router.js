const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
      res.render("pages/index",{"resultado":null,"valores":{"semana":"digite o dia da semana"}});  
});


router.post("/semana", (req, res)=>{

    let dia = parseInt(req.body.semana);

if(dia === 1 ){
    var semana = "Domingo";
}else if(dia === 2){
    var semana = "Segunda";
}else if(dia === 3){
    var semana = "Terça";
}else if(dia === 4){
    var semana ="Quarta";
}else if(dia === 5){
    var semana = "Quinta";
}else if(dia === 6){
    var semana = "Sexta";
}else if(dia === 7){
    var semana = "Sabado";
}else {
    var semana = "Valor invalido";
};

    let objJson = {"semana":semana}

    res.render("pages/index", {"resultado":objJson,"valores":{"semana":req.body.semana}})

});



module.exports = router;