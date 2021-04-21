const express = require('express');
const app =express();
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/",(req,res,next)=>{

return res.status(200).json({ code : 1,mensage:"Pokedex nacional kanto"});

});
app.use("/user",user);
app.use("/pokemon",pokemon);

app.use( (rec , res , next) => {

        return res.status('404').json({code:404, mensage : "pagina no encontrada se lo que intentas ¬¬ "});

});

app.listen(process.env.PORT || 3000 , ()=>{console.log('server running')});