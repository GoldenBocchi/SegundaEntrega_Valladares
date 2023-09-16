const codigos = new Array('AVIAV1223SD00:34CUZ','LANLA0342LP03:35PIU',
    'AARAA0034SC18:35JUL','COPCP0234LD19:35TRU','AARAA1280SD18:01PIU',
    'IBEIB0079SP19:55PIU','COPCP0123LC15:35AQP')

Introduccion()

function Introduccion(){
    let flag=0;
    mensajeInicial();

    while(flag!=1){
        let pregunta=parseInt(prompt("Ingresa tu opción (solo int)"))
        switch(pregunta){
            case 1:
                console.log("Usted decidio verificar todos los tipos de vuelos de la lista brindada");
                TipoVuelo(codigos);
                break;

            case 2:
                console.log("Usted decidio averiguar la cantidad de vuelos por ciudad y tipo de vuelo");
                let codciudad = prompt('Ingrese codigo ciudad').toUpperCase(); //para el ejemplo usar PIU
                let tipo= prompt('ingrese tipo de vuelo').toUpperCase();       //para el ejemplo usar S
                ContadorCiudad(codigos,codciudad,tipo);                        //con los codigos mencionados la respuesta es 2
                break;
            
            case 3:
                console.log("Usted decidio averiguar la cantidad de vuelos por aerolinea y tipo de vuelo");
                let selectorCA = prompt('ingrese codigo de aerolinea').toUpperCase();//para el ejemplo usar COP
                let tipoCA=prompt('ingrese tipo de vuelo').toUpperCase();      //para el ejemplo usar L
                ContadorAerolinea(codigos,selectorCA,tipoCA);                  //con los codigos mencionados la respuesta es 2
                break;

            default:
                console.log("desea seguir operando?");
                break;     
        }

        console.log("desea seguir operando?");
        let respuesta = prompt("Escriba SI o NO ");
        if(respuesta.toLowerCase()=="no"){
            flag+=1
            } else{
            console.log("Continue verificando")
            }
    }
}


//Funcion generadora de array mediante metodo push
function TipoVuelo(codigos){
    let mensaje = "";
    let tiposV = [];
    for(let i=0;i<codigos.length;i+=1){
        tiposV.push(codigos[i].substring(9,10))
    }
    mensaje= 'los tipos de vuelos en la lista de codigos ingresados son: ' 
        + tiposV.toString();
    console.log(mensaje)
}

//Funcion lectora de arrays , substrings y filtrado
function ContadorCiudad(codigos,codciudad,tipo){
    let flag=0;
    let mensaje="";

    for(let i=0;i<codigos.length;i+=1){
        if(codigos[i].substring(9,10)===tipo && codigos[i].substring(16,19)===codciudad){
            flag+=1; 
        } 
    }
    mensaje='La cantidad de vuelos a la ciudad con codigo '+codciudad+' y tipo de vuelo '+tipo+' es: '+ flag ;
    console.log(mensaje)
}

//Funcion lectora de arrays ,substrings y filtrado
function ContadorAerolinea(codigos,selectorCA,tipoCA){
    let flag=0;
    mensaje="";
    for (let i=0;i<codigos.length;i+=1){
        if(codigos[i].substring(0,3)===selectorCA && codigos[i].substring(9,10)===tipoCA){
            flag+=1;
        }
    }
    mensaje='La cantidad de vuelos de la aerolinea con codigo '+
    selectorCA+' y tipo de vuelo '+tipoCA+' es: '+flag;
    console.log(mensaje)
}

function mensajeInicial(){
    console.log("Opciones disponibles");
    console.log("1 -> Verificar todos los tipos de vuelos de la lista brindada");
    console.log("2 -> Verificar la cantidad de vuelos por ciudad y tipo de vuelo");
    console.log("3 -> Verificar la cantidad de vuelos por aerolinea y tipo de vuelo")
}
