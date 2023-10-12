// function myFunction(persona) {
//     alert("Hola " + persona.nombre)
// }
//
// var per = {"nombre":"Jhon", "id":2}
//
// myFunction(per)


// fetch es un GET por default y OJO que es asincronico
fetch('http://localhost:8080/api/mascotas')
    .then(responseHttp => {
        if (responseHttp.status >= 400) {
            alert("Hubo un error en el API")
        } else {
            return responseHttp.json()
        }
    })
    .then(listaDeMascotas => {
        console.log(listaDeMascotas)
        var a = 5000 + 6
        console.log(a)
    })


var a = 5 + 6 + "A"
console.log(a)


function crearMascota() {
    var nuevaMascota = {
        "nombre": "Lala",
        "raza": "PERRO"
    }

    fetch("http://localhost:8080/api/mascotas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaMascota) //serializa objeto o array a JSON
    })
        .then(response => {
            if (response.status >= 400) {
                alert("Hubo un error en el API")
            } else {
                return response.json()
            }
        })
        .then(mascotaCreada => {
            if(mascotaCreada != undefined) {
                alert("Mascota creada: " + mascotaCreada.nombre)
                document.getElementById("app").innerHTML += "<h3>" + mascotaCreada.nombre + "</h3>"
            }
        })
}

fetch('http://localhost:8080/api/mascotas')
    .then(response => response.json())
    .then(mascotas => {
        document.getElementById("app").innerHTML += '<table id="tablita" class="table table-striped table-bordered"></table>'
        mascotas
            .forEach(mascota => document.getElementById("tablita").innerHTML +=
                "<tr><td>" + mascota.nombre + "</td></tr>")
    })

