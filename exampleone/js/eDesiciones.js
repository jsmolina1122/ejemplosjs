function mostrarMensaje() {
    let edad=parseInt(document.getById("edad").value);

    // if(edad>=18){
    //     mensaje="sos mayor de edad";
    //     }else{
    //         mensaje="sos menor de edad";
    //     }

      //if con operador terniario    
let mensaje=(edad>=18)? "sos mayor de edad":"sos menor de edad";

//alert(mensaje);
document.write(mensaje);
}
    

function mostrarMensajedos(){
     let edadp=parseInt(document.getById("edadp").value);
     let estaturap=parseInt(document.getById("estaturap").value);
     let pesop=parseInt(document.getById("pesop").value);

        let parametroedad=80;
        let parametroestatura=1.40;
        let parametropeso=70;
        let mensajeDesicion="";

    // if(edadp<=parametroedad){
    //     if(estaturap>=parametroestatura){
    //         mensajeDesicion="Apto para realizar el deporte";
    //     }else{
    //         mensajeDesicion="No apto. Peso no valido"
    //     }
    //     mensajeDesicion="No apto. Estatura no valido"

    // }else{
    //     mensajeDesicion="No apto. Edad no valido"


    // }

    //if con operador logico AND(&&)

    if (edadp <= parametroedad && estaturap >= parametroestatura && pesop == parametropeso) {
        mensajeDesicion="Apto para realizar el deporte";
    } else {
        mensajeDesicion="No apto para realizar el deporte";
    }
    alert(mensajeDesicion);
}
