const express = require('express');
const user =express.Router();
/*const poop = require('../pokedex.json').pokemon;*/
const db =require("../config/database");
const pokemon = require('./pokemon');

user.post("/",async(req,res,next)=>{
    const{user_name, user_mail, user_password}=req.body
    if (user_name && user_mail && user_password ){
    let query= "INSERT INTO user( user_name, user_mail, user_password) ";
    query += `VALUES ('${user_name}','${user_mail}','${user_password}')`;
    const rows = await db.query(query);

    if (rows.affectedRows==1){
        return res.status(201).json({code:201, message : " user added done "});
    }
    return res.status(505).json({code:505, message:"error some times i rip the skin"});

}
return res.status(501).json({code:501, message:"error datos incompletos "});
});

user.get("/",async(req,res,next)=>{
    const query= "SELECT * FROM user"
    const rows = await db.query(query);
    return res.status(201).json({code:201, message : rows});

});
module.exports=user;