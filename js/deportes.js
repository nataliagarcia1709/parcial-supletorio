function cargarJsonDeportes() {
    var url = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarDeportes(data))
        .catch(function (){
            const deportes1 = document.getElementById("tabla-deportes");

        deportes1.innerHTML+="<div><h1>No hay noticias disponibles</h1></div>"
        });
}


function generarDeportes(json) {
    const tabla = document.getElementById("tabla-deportes");

    for (let i in json) {

        tabla.innerHTML += `<tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJsonDeportes();