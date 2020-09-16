function sumar() {
    //Recibir los datos
    let numerouno=parseInt(document.getElementById("nuno").value);
    let numerodos=parseInt(document.getElementById("ndos").value);

    //procesar los datos
    let resultados=parseInt(numerouno+numerodos);
    //Entregar los resultados
    document.getElementById("resultadooperacion").innerHTML=resultados;
}

function restar() {
    //Recibir los datos
    let numerouno=parseInt(document.getElementById("nuno").value);
    let numerodos=parseInt(document.getElementById("ndos").value);

    //procesar los datos
    let resultados=parseInt(numerouno-numerodos);
    //Entregar los resultados
    document.getElementById("resultadooperacion").innerHTML=resultados;
}

function multiplicar() {
    //Recibir los datos
    let numerouno=parseInt(document.getElementById("nuno").value);
    let numerodos=parseInt(document.getElementById("ndos").value);

    //procesar los datos
    let resultados=parseInt(numerouno*numerodos);
    //Entregar los resultados
    document.getElementById("resultadooperacion").innerHTML=resultados;
}

function dividir() {
    //Recibir los datos
    let numerouno=parseInt(document.getElementById("nuno").value);
    let numerodos=parseInt(document.getElementById("ndos").value);

    //procesar los datos
    let resultados=parseInt(numerouno/numerodos);
    //Entregar los resultados
    document.getElementById("resultadooperacion").innerHTML=resultados;
}

function AreaTriangulo() {
    //Recibir los datos
    let Base=parseInt(document.getElementById("base").value);
    let Altura=parseInt(document.getElementById("altura").value);

    //procesar los datos
    let resultados=parseInt((base*altura)/2);
    //Entregar los resultados
    document.getElementById("resultadoarea").innerHTML=resultados;
}

function Areacirculo() {
    //Recibir los datos
    let radio=parseInt(document.getElementById("radio").value);

    //procesar los datos
    let resultados=parseInt(Mat.PI*radio*radio);
    //Entregar los resultados
    document.getElementById("resultadocirculo").innerHTML=resultados;
}