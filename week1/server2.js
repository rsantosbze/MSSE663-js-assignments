var express = require ('express');

var app = express();
app.use('/', function (req,res){
    res.send('Hello World from Express!!!');

});

app.listen(8000,function () {
    console.log('Running Server on port 8000......');
})