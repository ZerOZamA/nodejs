const express = require('express');
const pokemon =express.Router();
/*const poop = require('../pokedex.json').pokemon;*/
const db =require("../config/database");

pokemon.post("/", (req,res , next)=>{
    console.log("paso")
    return res.status(200).send(req.body);

}
);

pokemon.get("/",async (req,res,next)=>{
    const pokemn = await db.query("SELECT * FROM pokemon");

        return res.status(200).json({code:1,mensage:pokemn});
        
        }); 

pokemon.get("/:id([0-9]{1,3})",async (req,res,next)=>{
    const pokemn = await db.query("SELECT * FROM pokemon");

    var id=req.params.id-1;
    var pkid= pokemn[id];
    if (id <= 722){
        
        return res.status(200).json({code: 1, mensage : pkid});
    }
    else{

        return res.status(404).json({code:404,mensage:"pokemon missing"});
    }

});

pokemon.get("/:name([A-Za-z]+)",async(req,res,next)=>{

    const pokemn = await db.query("SELECT * FROM pokemon");
    var name1=req.params.name;
    var name1=name1.toLowerCase();
    console.log(name1);
    var pokename= pokemn.filter((poki) => {
        return (poki.pok_name.toLowerCase() == name1) && poki;
        

    });
   ( pokename.length > 0 )? 
    res.status(200).json({code: 1, mensage : pokename}) :
    res.status(404).json({code : 4040, mensage :"pokemon missing"});
});

module.exports=pokemon;