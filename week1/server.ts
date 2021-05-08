var express = require('express');
function serve(req: any, res: any): void {
  res.send('Hello World!!!!');
}

var app = express();
app.use('/', serve);

app.listen(8000, function () {
  console.log('Running Server on port 8000......');
});
