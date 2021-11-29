
function getCatUrl() {
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.thecatapi.com/v1/images/search?category_ids=1&api_key=d378884b-cb7d-42bc-95c0-bd8202d3386e");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";

    // Vad ska vi göra när svaret kommer?
    xhr.onload = function () {
        for (let i = 0; i < xhr.response.length; i++) {
            document.querySelector("div").innerHTML += "<img src=" + xhr.response[i].url + ">";
        }
    }
    // Allt klart - skicka iväg vår request
    xhr.send();
}