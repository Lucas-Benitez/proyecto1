const miButton = document.getElementById("run-test");
const contenedorPreguntas = document.getElementById("cont-questions"); 
const resultado = document.getElementById("resultado");

let preguntas = [];


fetch ('http://localhost/data.json')
    .then(response => {
    if(!response.ok){
        throw new Error("Error al hacer el fetch");
    }
    return response.json();
    })
    .then(data => {
    preguntas = data;
    miButton.disable = false;
    })
    .catch(error => {
        console.error("Error: ", error);
    }); 
    
    
function mostrarPregunta (){

    
}
  miButton.onclick = iniciarTest;