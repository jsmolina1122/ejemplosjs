
function mostrarMensaje() {
    
    let edad=ParseInt(document.getElementById("edad").value);

    // if(edad>=18){
    //     mensaje="sos mayor de edad";
    //     }else{
    //         mensaje="sos menor de edad";
    //     }

      //if con operador terniario    
    let mensaje = (edad >= 18)? "sos mayor de edad":"sos menor de edad";

    alert(mensaje);
    //document.write(mensaje);
}
    

function mostrarMensajedos(){
     let edadp=parseInt(document.getElementById("edadp").value);
     let estaturap=parseInt(document.getElementById("estaturap").value);
     let pesop=parseInt(document.getElementById("pesop").value);

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

//if con operador logico OR (||)
if (edadp <= parametroedad || estaturap >= parametroestatura || pesop == parametropeso) {
    mensajeDesicion="Apto para realizar el deporte";
} else {
    mensajeDesicion="No apto para realizar el deporte";
}
alert(mensajeDesicion);


function mostrarmensajetres(){
    let productname=document.getElementById("productname").value;
    let price=0;
     const product_one='a';
     const product_two='b';
     const product_three='c';
     const MESSAGE='product invalid!!'

    // if (productname.toUppercase()==product_one) {
    //     price=2000;
    //     //alert(price);
    // } else {
    //     if(productname.toUppercase()==product_two){
    //         price=2200;
    //        // alert(price);
    //     }
    //     else{
    //         if (productname.toUppercase()==product_three) {
    //            price=1800; 
    //            //alert(price);
    //         }else{
    //             alert(MESSAGE.toUppercase());
    //         }
    //     }
        
    // }
    // alert(price);
    switch (productname.toUperCase()) {
        case product_one:
            price=20000;
            break;
        case product_two:
                price=22000;
                break;
        case product_three:
                price=18000;
                break;
    
        default:
            alert(MESSAGE.toUpperCase());
            break;
    }
    alert(Intl.NumberFormat.format(price));
}

//function prenderapagar(interruptor) {
    let prenderapagar=interruptor=>{

    let pic;

    // if (interruptor==0) {
    //     alert('OFF')
        
    // } else {
    //     alert('ON')
        
    // }
    let mensaje=(interruptor==0)?"OFF":"ON"
    alert(mensaje);
}