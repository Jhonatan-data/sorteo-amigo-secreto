// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array para almacenar la lista de amigos secretos
let amigos=[];

//funcion para agregar amigo secreto

function agregarAmigo() {
//valida si el campo donde se ingresa amigo secreto está vacío, caso contrario almacena nombre

    let amigoSecreto = document.getElementById("amigo").value;

    if (amigoSecreto.trim() === "") {
        alert("Por favor ingresa un nombre.");
        return;
        
    } else {
        amigos.push(amigoSecreto);
        document.getElementById("amigo").value = "";
        VerListaAmigos();

    }
    return;
}
// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function VerListaAmigos() {
    let listaAmigo= document.getElementById("listaAmigos");
    listaAmigo.innerHTML="";

    for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];
        let listPantalla= document.createElement("li");
        listPantalla.textContent= element;
        listaAmigo.appendChild(listPantalla);
    }
    return;
}         
   
//Función para sortear amigos y controlar que el índice no esté vacío y se puede proceder con el sorteo

function sortearAmigo() {

    let numeroDeAmigos= amigos.length;
if (numeroDeAmigos === 0) {
    alert("Por favor debes insertar un nombre para el sorteo.");
} else {
    let indexAmigo = Math.floor(Math.random() * numeroDeAmigos);
    let resultadoPantalla = document.getElementById("resultado");
    resultadoPantalla.innerHTML= amigos[indexAmigo];
}
return;    
}




