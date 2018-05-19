const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

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
    res.send({
        errorMessage: 'Unable to handle request'  
    })
});

app.listen(3000, () => {
    console.log('server is up and running...port 3000');
});



