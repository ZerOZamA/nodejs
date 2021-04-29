(req,res,next)=>{
    res.header("Acces-Control-Allow-Origin",'*');
    res.header(
        "Acces-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method=='OPTIONS'){
        res.header("Acces-Control-Allowed-Methods","PUT,PATCH,DELETE,POST,GET");
        return res.status(200).json({});
    };
}