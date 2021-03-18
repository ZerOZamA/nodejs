const express = require('express');
const app =express();
const {pokemon}= require('./pokedex.json');
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res,next)=>{
    
    var myImages = '';
    for(var i = 0; i < pokemon.length; i++){
        myImages += "<p>"+pokemon[i]['name'] +"</p>"+'<img src="'+pokemon[i]['img']+'" />';
        }
      
    return res.status(200).send( "Pokedex nacional kanto"+myImages);});


app.post("/pokemon", (req,res , next)=>{

    return res.status(200).send(req.body)

}
);

app.get("/landing/pokedex",(req,res,next)=>{

        return res.status(200).send(pokemon)
        
        });

app.get("/landing/pokedex/:id([0-9]{1,3})",(req,res,next)=>{
    var id=req.params.id-1;
    var pkid= pokemon[id];
    if (id <= 150){
        var html = "<div><p>"+pkid['name']+"</p>"+'<img src="'+pkid["img"]+'"/>'+"<p>"+pkid['type']+"</p></div>";
        return res.status(200).send(html);
    }
    else{

        return res.status(404).send("pokemon missing");
    }

});

app.get("/landing/pokedex/:name([A-Za-z]+)",(req,res,next)=>{
    var name1=req.params.name;
    var name1=name1.toLowerCase();
    console.log(name1);
    var pokename= pokemon.filter((poki) => {
        return (poki.name.toLowerCase() == name1) && poki;
        

    });
   ( pokename.length > 0 )?
    res.status(200).send(pokename) :
    res.status(404).send("not found");
});


app.listen(process.env.PORT || 3000 , ()=>{console.log('server running')});