const express = require("express");
const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const morgan = require('morgan')
const sessionKey = require('./sessionKey')
const app = express();
const port = process.env.PORT || 5000;

var user=[]
//set engine
app.engine("mustache", mustacheExpress());
app.set('views', './public');
app.set("view engine", "mustache")
//middleware
app.use('/', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session(sessionKey));
function checkAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    } else {
        next();
    }
}


app.get('/', function(req, res){
    res.render('welcome')
})

app.get('/signup', function (req, res) {
    res.render('signup')
})

app.get('/userhome', function(req, res){
    res.render('index')
})


app.get('/favorites', function(req, res){
    res.render('favorite')
})

app.listen(port, function () {
    console.log("Server is running on port", port);
})
