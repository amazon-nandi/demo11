const exp = require('express');
var oExp = new exp();
// var oRoute = oExp.Router();

oExp.use('/abcd',(req,res,next) => {
    next();
    res.send('hi');
    

});

const oPort = process.env.port || 3000;
oExp.listen(oPort);