const express = require('express');
const pokemon =express.Router();
/*const poop = require('../pokedex.json').pokemon;*/
const db =require("../config/database");

pokemon.post("/",async (req,res , next)=>{
    const { pok_name, pok_height, pok_weight, pok_base_experience}=req.body;
    if (pok_name && pok_height && pok_weight && pok_base_experience){
        let query ="INSERT INTO pokemon(pok_name, pok_height, pok_weight, pok_base_experience)";
        query +=` VALUES('${pok_name}','${pok_height}','${pok_weight}','${pok_base_experience}')`;
        const rows = await db.query(query);
        
        if (rows.affectedRows==1){
            return res.status(201).json({code:201, message : " pokemon added "});
        }
        return res.status(500).json({code:500, message:"error"});
    }       
    return res.status(500).json({code:500, message:"error datos incompletos "});
}   
);
 
pokemon.get("/",async (req,res,next)=>{
    const pokemn = await db.query("SELECT * FROM pokemon");

        return res.status(200).json({code:200,mensage:pokemn});
        
        }); 

pokemon.get("/:id([0-9]{1,3})",async (req,res,next)=>{
    const pokemn = await db.query("SELECT * FROM pokemon");

    var id=req.params.id-1;
    var pkid= pokemn[id];
    if (id <= 722){
        
        return res.status(200).json({code: 200, mensage : pkid});
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
    res.status(200).json({code: 200, mensage : pokename}) :
    res.status(404).json({code : 4040, mensage :"pokemon missing"});
});

module.exports=pokemon;