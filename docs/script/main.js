import { sendApiRequest } from './modules/fetch.js';
import './router/router.js';
import './modules/input.js';

function useApiData(buttonNumber, data){
    if (buttonNumber == 1){
        var data_explanation = document.querySelector("#defaultDiv")
        var explanation = document.createElement("P")
        data_explanation.innerHTML = ""
        explanation.innerHTML = data.explanation
        data_explanation.appendChild(explanation)
        if (data.mediaType == "video"){
            var mediaType = document.createElement("iframe")
            mediaType.src = data.url
            data_explanation.appendChild(mediaType)
        } else {
            var mediaType = document.createElement("img")
            mediaType.src = data.url
            data_explanation.appendChild(mediaType)
        }
        
    } else if (buttonNumber == 2){
        var data_explanation = document.querySelector("#singleDayDiv")
        var explanation = document.createElement("P")
        data_explanation.innerHTML = ""
        explanation.innerHTML = data.explanation
        data_explanation.appendChild(explanation)
        if (data.media_type == "video"){
            var mediaType = document.createElement("iframe")
            mediaType.src = data.url
            data_explanation.appendChild(mediaType)
        } else {
            var mediaType = document.createElement("img")
            mediaType.src = data.url
            data_explanation.appendChild(mediaType)
        }
    }

    else if (buttonNumber == 3){
        var data_explanation = document.querySelector("#startDateEndDateDiv")
        data_explanation.innerHTML = ""
        var explanation
        for (var i = 0; i < data.length; i++) {
            explanation = document.createElement("p")
            explanation.innerHTML = data[i].explanation
            data_explanation.appendChild(explanation)
            if (data[i].media_type == "video"){
                var mediaType = document.createElement("iframe")
                mediaType.src = data[i].url
                data_explanation.appendChild(mediaType)
            } else {
                var mediaType = document.createElement("img")
                mediaType.src = data[i].url
                data_explanation.appendChild(mediaType)
            }

            // data_explanation.innerHTML += "<br>"
            // data_explanation.innerHTML += data[i].explanation
            // data_explanation.innerHTML += "<br>"
            // data_explanation.innerHTML += data[i].media_type == "video" ? `<iframe width="560" height="315" src="${data[i].url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data[i].url}">`
        }
    }
}

export { useApiData }