const express = require('express');
const app = express();
const path = require('path');


app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

 
app.get('/', function(req, res) {
    res.sendFile('public/index.html' , { root : __dirname});
    console.log('static is used');
});

app.get('/hello', function(req, res) {
	res.send({
        msg: "Hello world"
    });
});

app.get('/echo/:id', function(req, res) {
	res.send({
        id: "dog"
    });
});

app.post('/sum', function requestHandler(req, res) {
    let sum = 0;
    for (let i = 0; i < req.body.numbers.length; i++) {
        sum += Number(req.body.numbers[i]);
    }
    console.log(sum);
    res.end(String(sum));
});


app.listen(3000, function() {
	console.log('running');
});