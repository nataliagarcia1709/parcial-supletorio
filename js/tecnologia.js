function cargarJson() {
    var url = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(function (){
            const tecnologia1 = document.getElementById("tabla-tecnologia");

            tecnologia1.innerHTML+="<div><h1>No hay noticias disponibles</h1></div>"
        });
}


function generarNoticias(json) {
    const tabla = document.getElementById("tabla-tecnologia");

    for (let i in json) {

        console.log(json)
        tabla.innerHTML += `<tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJson();