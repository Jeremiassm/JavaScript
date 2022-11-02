 //Bievenida
let presentacion = alert("Bienvenido a Bacanal!")

//Despedida
let saludoDespedida = ("gracias por su compra, te esperamos nuevamente!");

function menu(){
    return prompt("Seleccione qué desea comprar: 1. Hamburguesas 2. Panchos 3. Papas fritas 4. No quiero comprar");
}

//Seleccionar que tipo de producto desea comprar
let opcion = menu();
while(opcion != "4") {

    switch (opcion) {
        case "1":
            let hamburguesa = (prompt("Tenemos las siguientes hamburguesas para ofrecerte: 1. Gringa Criolla 2. Patty melt 3. Monster 4. California Cheese"));
                switch (hamburguesa){
                    case "1":
                        alert("El valor que debe abonar es de $1200, " + saludoDespedida);
                        break;
                    case "2":
                        alert("El valor que debe abonar es de $1350, " + saludoDespedida);
                        break;
                    case "3":
                        alert("El valor que debe abonar es de $1400, " + saludoDespedida);
                        break;
                    case "4":
                        alert("El valor que debe abonar es de $1100, " + saludoDespedida);
                            break;
                    }
        break;
        case "2":
            let panchos = (prompt("Tenemos los siguientes panchos para ofrecerte: 1. El chingon 2. Tio Sam 3. Panchido"));
            switch (panchos){
                case "1":
                    alert("El valor que debe abonar es de $800, " + saludoDespedida);
                    break;
                
                case "2":
                    alert("El valor que debe abonar es de $500, " + saludoDespedida);
                    break;
                case "3":
                    alert("El valor que debe abonar es de $700, " + saludoDespedida);
                    break;
            }
            break;
        case "3":
            let papasFritas = (prompt("Tenemos las siguientes papas para ofrecerte: 1. Comunes 2. Cheddar 3. Cheddar y bacon 4. Bacon"));
                switch (papasFritas){
                    case "1":
                        alert("El valor que debe abonar es de $600, " + saludoDespedida);
                        break;
                    case "2":
                        alert("El valor que debe abonar es de $700, " + saludoDespedida);
                        break;
                    case "3":
                        alert("El valor que debe abonar es de $750, " + saludoDespedida);
                        break;
                    case "4":
                        alert("El valor que debe abonar es de $700, " + saludoDespedida);
                        break;
                    }
            break;                      
        default:
            alert("Seleccione una opción válida");
            break;
    }
    opcion = menu();
}
alert("Gracias por visitar Bacanal, te esperamos nuevamente!");

