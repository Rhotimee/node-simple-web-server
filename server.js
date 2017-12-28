const express = require('express');
const hbs = require('hbs');
const fs = require('fs')


let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs); //this tells node that we w;ant to use that template engine


app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method}: ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err){
            console.log(`Unable to append to server.log`)
        }
    });
    next()
});

// app.use((req,res, next) => {
//     res.render('maintainance.hbs')
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});


app.get('/', (req, res) => {
    // res.send('<b>Hey Express !</b>')
    res.render('home.hbs', {
        welcome: 'Welcome here Visitor',
        pageTitle: 'Home Page ',
        title: 'home'    
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        title: 'about'

    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'There is no data here'
    })
})
app.listen(3000);