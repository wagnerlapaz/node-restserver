require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaja: 'El nombre es necesario'
        });
    }

    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

app.listen(3000, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})