const express = require("express");
const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 5000;

app.engine("mustache", mustacheExpress());
app.set('views', './public');
app.set("view engine", "mustache")
app.use('/', express.static('./public'))



app.get('/', function(req, res){
    res.render('index')
})

app.listen(port, function () {
    console.log("Server is running on port", port);
})
