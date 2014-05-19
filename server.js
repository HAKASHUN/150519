'use strict'

var path = require('path'),
    express = require('express'),
    sass = require('node-sass'),
    app = express(),
    config = {
        bower: 'app/bower_components',
        bootstrap: 'app/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap'
    };

// configurations
app.set('views', path.resolve(__dirname, 'view'));
app.set('view engine', 'jade');

// static files
app.use('/app', express.static(path.join(__dirname, 'app')));

// sass middleware
app.use(
    sass.middleware({
        src: __dirname,
        dest: __dirname,
        debug: true
    })
);

app.get('/', function(req, res) {
    res.render('ng', config);
});

app.get('/test', function(req, res) {
    var data = {
        title: 'Home!'
    }
    res.render('index.jade', data);
});

app.listen(3333, function() {
    console.log('listen 3333')
})