const fetch = require('node-fetch')
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

async function sendApiRequest(){
  let response = await fetch(API_URL)
  let data = await response.json()
  console.log(data)
  return data
}



module.exports = {sendApiRequest}