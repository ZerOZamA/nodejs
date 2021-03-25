const express = require('express');
const app =express();
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json()):
app.use(express.urlencoded({extended : true}));
app.get("/",(req,res,next)=>{

return res.status(200).send( "Pokedex nacional kanto");});

app.use("/pokemon",pokemon);


app.listen(process.env.PORT || 3000 , ()=>{console.log('server running')});