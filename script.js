const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const button = document.getElementById("botoncopiar");
const textarea = document.getElementById("mensaje");
const imagen = document.getElementById("dibujo");
const ningunmensaje = document.getElementById("titulo-mensaje");
const ingresatexto = document.getElementById("ingresa-texto");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    imagen.style.visibility = "hidden";
    ningunmensaje.style.visibility = "hidden";
    ingresatexto.style.visibility = "hidden";
    button.style.display = "block";
}
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado

}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptar){
    let matrizCodigo = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptar;
} 
button.addEventListener("click", function() {
    textarea.select();
    document.execCommand("copy");
    button.textContent = "Texto copiado";
});
