const express = require('express');
const app =express();
const {pokemon}= require('./pokedex.json');
app.get("/",(req,res,next)=>{
    
    var myImages = '';
    for(var i = 0; i < pokemon.length; i++){
        myImages += "<p>"+pokemon[i]['name'] +"</p>"+'<img src="'+pokemon[i]['img']+'" />';
        }
      
    res.status(200);
    res.send( "Pokedex nacional kanto"+myImages);});

app.get("/landing/pokedex",(req,res,next)=>{

        res.status(200);
        res.send(pokemon)
        
        });

app.get("/landing/pokedex/:id([0-9]{1,3})",(req,res,next)=>{
    id=req.params.id-1;
    var pkid= pokemon[id];
    if (id <= 150){
        var html = "<div><p>"+pkid['name']+"</p>"+'<img src="'+pkid["img"]+'"/>'+"<p>"+pkid['type']+"</p></div>";
        res.status(200);
        res.send(html);
    }
    else{

        res.status(404);
        res.send("pokemon missing")
    }

});

app.get("/landing/pokedex/:name",(req,res,next)=>{
    name1=req.params.name;
    name1=name1.toLowerCase()
    pokename=""
    for(var i = 0; i < pokemon.length; i++){
        pokename=pokemon[i]['name']
        if (pokename.toLowerCase()==name1){

            res.status(200);

            res.send(pokemon[i])

        }
        
        }
        res.status(404);
        res.send("pokemon missing")
});


app.listen(3000, ()=>{console.log('server running')});