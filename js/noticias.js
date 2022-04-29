function cargarJsonNoticias() {
    var url = "https://carlosreneas.github.io/endpoints/noticias.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticiasInicio(data))
        .catch(function (){
            const noticias1 = document.getElementById("noticias");

        noticias1.innerHTML+="<div><h1>No hay noticias disponibles</h1></div>"
        });
}

function generarNoticiasInicio(json) {
    const noticias = document.getElementById("noticias");

    for (let i in json) {

        noticias.innerHTML += `<div><h1>${json[i].titulo}- ${json[i].categoria} - ${json[i].fecha} </h1>
                            <h3>${json[i].descripcion}</h3>
                            <p>${json[i].detalle}</p>
                            <img src='${json[i].img}'></img></div><hr>`
    }
}

cargarJsonNoticias();