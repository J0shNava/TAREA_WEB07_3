function cambioDeNombre(){
    let nombre = prompt(`Ingresa tu nombre: `);
    document.getElementById("nombre").innerHTML = `¡Hola, ${nombre}!`;
}
console.log()