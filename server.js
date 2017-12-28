const express = require('express');
const hbs = require('hbs')

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', hbs); //this tells node that we want to use that template engine

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