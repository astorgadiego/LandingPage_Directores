const USUARIOS_REGISTRADOS = {
    "Diego@gmail.com":1234,
    "Juan@gmail.com":2357,
    "Emma@gmail.com":1258,
    "Fito@gmail.com":4654,
    "Messi@gmail.com":2022,
    "Xavi@gmail.com":2010,
    "Sebastian@gmail.com":2024 
}

function loguear() {

    let user = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let marcador = false

    for ( usuario in USUARIOS_REGISTRADOS ){

        if ( user == usuario && clave == USUARIOS_REGISTRADOS[usuario] ) {

            marcador = true;
        }

    }

    if( marcador ){
        window.location="bienvenida.html";
    }else{
         alert("Datos ingresado incorrectos")
    }

}