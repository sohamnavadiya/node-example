const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Soham',
        age: 24,
        likes: [{
                facebook: 12,
                id: "FB@123"
            },{
                orkut: 123,
                id: "OK@123"
            }]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    errorMessage: 'Unable to handle request'
});

app.listen(3000);