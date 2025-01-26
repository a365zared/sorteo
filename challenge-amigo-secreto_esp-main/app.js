let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo"); 
    let nombre = nombreInput.value.trim(); 
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); 
        return;
    }
    
    amigos.push({ nombre: nombre }); 
    console.log(amigos);
    nombreInput.value = ""; 
    actualizarLista(); 
}

function actualizarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i].nombre}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        resultado.innerHTML = "";
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    document.getElementById("listaAmigos").innerHTML = "";
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado.nombre}`;
    console.log(amigoSorteado);
}
