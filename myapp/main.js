const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
const {sendApiRequest} = require('./router/fetch')
const render = require('./render/render')
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"


app.set('views', 'myapp/views');
app.set('view engine', 'ejs');

//app.get('/', render.home);

app.get('/', async (req, res) => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(resp => resp.json())
  .then(data => {
    const picture = data.url
    res.render('pages/index.ejs', { picture });
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})