var express = require('express');
var faker = require('faker');
var path = require('path');
// use （npm install faker )
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile('login.html', {root: path.join(__dirname)});
});

app.post('/submit-data', function (req, res) {
    var name = req.body.username;
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard();
    res.send(name + ' Submitted Successfully!'+randomName+randomEmail+randomCard);

});

app.listen(8080);
