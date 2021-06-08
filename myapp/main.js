const express = require('express');
const app = express();
const port = 5000;
const fetch = require('node-fetch');
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"

// Using static files from static directory
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/css', express.static(__dirname + 'public/css'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  let API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-03-10`
    fetch(API_url)
    .then(resp => resp.json())
    .then(apidata => {
      let data = apidata
      res.render('index.ejs', { data });
    })
});

app.get('/date/:date', function (req, res) {
  let API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${req.params.date}`
  fetch(API_url)
    .then(resp => resp.json())
    .then(apidata => {
      let data = apidata
      console.log(data)
      res.render('detail.ejs', { data });
    })
});

app.get('/offline', (req, res) => {
  res.render('offline.ejs', {
    pageTitle: `Offline`
  })
});

app.listen(port, () => console.log(`App is running on port ${port}`));