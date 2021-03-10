import { sendApiRequest } from './fetch.js';
import { useApiData } from '../main.js';

let searchTodayButton = document.querySelector("#searchToday")
let searchSingleDayButton = document.getElementById("searchSingleDay")
let searchStartEndButton = document.querySelector("#searchStartEnd")

const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
var API_url = ""

searchTodayButton.addEventListener("click", async()=>{
    API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    const data = await sendApiRequest(API_url)
    useApiData(1, data)
})

searchSingleDayButton.addEventListener("click", async()=>{
  var calendarDate = document.querySelector("#searchTermSingleDay").value
  API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${calendarDate}`
  const data = await sendApiRequest(API_url)
  useApiData(2, data)
})

searchStartEndButton.addEventListener("click", async()=>{
    var calendarStartDate = document.querySelector("#searchTermStartDate").value
    var calendarEndDate = document.querySelector("#searchTermEndDate").value
    API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${calendarStartDate}&end_date=${calendarEndDate}`
    const data = await sendApiRequest(API_url)
    useApiData(3, data)
})

export { searchTodayButton, searchStartEndButton }