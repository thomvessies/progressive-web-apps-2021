const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
const {sendApiRequest} = require('./router/fetch')
const render = require('./render/render')
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

//app.get('/', render.home);

// app.get('/', async (req, res) => {
//   fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//   .then(resp => resp.json())
//   .then(data => {
//     const picture = data.url
//     res.render('./index.ejs', { picture });
//   })
// });



app.get('/', function(req, res) {
  res.redirect('/stories');
});

app.get('/stories', function(req, res) {
  request(host, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('index.ejs', { stories: data });
  });
});

app.get('/stories/:id', function(req, res) {
  request(host + req.params.id, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('detail.ejs', { story: data });
  });
});

var server = app.listen(port, function() {
  console.log('server is running on port 3000');
});
