window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toLowerCase();
    }, true);
document.getElementById("cifrar").addEventListener("click", function(){
    let text = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cifrar2(text, desplazamiento);
}, true);
document.getElementById("descifrar").addEventListener("click", function(){
    let text = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value =  descifrar2(text, desplazamiento);
}, true);
}

function cifrar(texto, desplazamiento){
    let resultado = "";
    let letras = "abcdefghijklmnopqrstuvwxyz";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto){
        for (let i=0; i<texto.length; i++){
            if (letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
                resultado += letras[posicion];
            }
            else
                resultado += texto[i];
        }
    }
    return resultado;
}
function cifrar2 (texto, desplazamiento){
    if (!texto)
        return"";
    const letras ="abcdefghijklmnopqrstuvwxyz";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[a-z]/ig, c=> letras [(letras.indexOf(c)+desplazamiento)%26]);

}
function descifrar2 (texto, desplazamiento){
    if (!texto)
        return"";
    const letras ="abcdefghijklmnopqrstuvwxyz";
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[a-z]/ig, c=> letras [(letras.indexOf(c)-desplazamiento)%26]);
}

