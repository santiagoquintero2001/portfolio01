//PASOS PARA CONFIGURAR UN CLIENTE CON JS PURO DE UN API REST
//PASOS PARA CONSUMIR UN API REST UTILIZANDO JS

//1. Conocer la URL(endpoint) del API y almacenarla en una variable
let urlGET = "https://api.spotify.com/v1/artists/0WI8OfWCRvK4nGHmKfFQmd/top-tracks?market=US";

//1.1 Identificar la URL del servicio que nos entregara el TOKEN
let urlPOST = "https://accounts.spotify.com/api/token";

//1.2 Definimos parametros
let llave1 = "grant_type=client_credentials";
let llave2 = "client_id=19279a60559e4034b3196ecec95e2d6b";
let llave3 = "client_secret=b52b7e585c4840d887c2210751cafc50";

let parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: `${llave1}&${llave2}&${llave3}`
}

//1.1.3 Utilizar fetch para conectarnos con el API
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));

function obtenerToken(datos) {
    let token = datos.token_type + " " + datos.access_token;
    let parametrosGET = {
        method: "GET",
        headers: { Authorization: token }
    }
    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => pintarInformacion(datos));
}

function pintarInformacion(datos) {

    let titulo = document.getElementById("titulo");
    let imagen = document.getElementById("imagen");
    let audio = document.getElementById("audio");

    let titulo2 = document.getElementById("titulo2");
    let imagen2 = document.getElementById("imagen2");
    let audio2 = document.getElementById("audio2");

    let titulo3 = document.getElementById("titulo3");
    let imagen3 = document.getElementById("imagen3");
    let audio3 = document.getElementById("audio3");

    titulo.textContent = datos.tracks[0].name;
    imagen.src = datos.tracks[0].album.images[1].url;
    audio.src = datos.tracks[0].preview_url;

    titulo2.textContent = datos.tracks[1].name;
    imagen2.src = datos.tracks[1].album.images[1].url;
    audio2.src = datos.tracks[1].preview_url;

    titulo3.textContent = datos.tracks[2].name;
    imagen3.src = datos.tracks[2].album.images[1].url;
    audio3.src = datos.tracks[2].preview_url;

}