const express = require('express');

let app = express();
 
app.get('/', (req, res) => {
    // res.send('<b>Hey Express !</b>')
    res.send([{

        name: 'Rotimi',
        Age: 23,
        likes: ['Chess', '9gag', 'Coding', 'Reading',]
    }])  
});

app.get('/about', (req, res) => {
    res.send('<b>Welcome to the about page </b>')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'There is no data here'
    })
})
app.listen(3000);