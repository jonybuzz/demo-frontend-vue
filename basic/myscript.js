// function myFunction(){
//     alert("Hola")
// }


//fetch es un GET por default
fetch('http://localhost:8080/mascotas')
    .then(response => {
        if (response.status >= 400) {
            alert("Hubo un error en el API")
        } else {
            return response.json()
        }
    })
    .then(listaDeMascotas => {
        console.log(listaDeMascotas)
        var a = 5000 + 6
        console.log(a)
    })

var a = 5 + 6
console.log(a)


function crearMascota() {
    var nuevaMascota = {
        nombre: "Lala", raza: "PERRO"
    }

    fetch("http://localhost:8080/mascotas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaMascota)
    })
        .then(response => {
            if (response.status >= 400) {
                alert("Hubo un error en el API")
            } else {
                return response.json()
            }
        })
        .then(mascotaCreada => {
            alert("Mascota creada: " + mascotaCreada.nombre)
            document.getElementById("app").innerHTML += "<h3>" + mascotaCreada.nombre + "</h3>"
        })
}


fetch('http://localhost:8080/mascotas')
    .then(response => response.json())
    .then(mascotas => {
        document.getElementById("app").innerHTML += '<table id="tablita" class="table table-striped table-bordered"></table>'
        mascotas.forEach(mascota => document.getElementById("tablita").innerHTML += "<tr><td>" + mascota.nombre + "</td></tr>")
    })

