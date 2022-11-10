 //Bievenida
let presentacion = alert("Bienvenido a Bacanal!");

//Despedida
let saludoDespedida = ("gracias por su compra, te esperamos nuevamente!");

//Definimos una función para que el usuario visualice el menú
function menu(){
    return prompt("Seleccione qué desea comprar: 1. Mostrar menú completo 2. Hamburguesas Bacanal 3. Hamburguesas Clásicas 4. Panchos 5. Papas fritas 6. No quiero comprar");
}

//Arrays con el menú completo
const hamburguesas = [
    {id:1, nombre:"Gringa criolla", precio: 1210, ingredientes: "Doble cheddar, lechuga repollada, tomate rodajas de pepinillos agridulce, mayones de morrones y cebolla a la plancha"},
    {id:2, nombre:"Smoker", precio: 1290, ingredientes: "Lechuga escarola, queso ahumado, sweetchili con vinagre, chorizo colorado y morrón rojo sudado en sus propios jugos."},
    {id:3, nombre:"Burguesa", precio: 1290, ingredientes: "Pickles de remolacha y tomillo, hojas de rúcula, puré de hongos al malbec y dressing de crema de mostaza en grano y miel"},
    {id:4, nombre:"Fusión", precio: 1290, ingredientes: "Panceta crocante, blend de queso mozzarella, parmesano gruyere fundidos con cebolla caramelizada y ketchup"},
    {id:5, nombre:"Monster", precio: 1460, ingredientes: "3 discos de care, 3 fetas de cheddar, 2 festas de atuel, aderezo staker"},
    {id:6, nombre:"Chill queen", precio: 910, ingredientes: "Medallón de 120 gramos, queso cheddar, cebolla, tomate, lechuga y dressing secreto."},
    {id:7, nombre:"Smashed burger", precio: 1210, ingredientes: "Carne smash, cebolla y manteca"},
    {id:8, nombre:"Ricky fort", precio: 1290, ingredientes: "Blend de queso roquefort y nueces, tomate, láminas de cebolla curadas en limón y panceta crocante"},
    {id:9, nombre:"Menú kids", precio: 970, ingredientes: "Burger simple con queso, chicken tenders y papas."},
    {id:10, nombre:"California Cheese", precio: 1210, ingredientes: "Cheddar, lechuga repollada, tomate, aros de cebolla morada, salsa stacker, pan con escamas de parmesano."},
    {id:11, nombre:"California Bacon", precio: 1210, ingredientes: "Cheddar, lechuga repollada, tomate, aros de cebolla morada, salsa stacker, panceta."},
]
const hambuersasClasicas = [
    {id:12, nombre:"Cheese", precio: 1080, ingredientes: "Pan, carne, queso y dressing secreto"},
    {id:13, nombre:"Cheese baco", precio: 1180, ingredientes: "Pepino, cebolla moradaen brunoise, cheddar, panceta y dressing secreto."},
    {id:14, nombre:"Cheddalier", precio: 1210, ingredientes: "Cheddar, panceta, cebolla crispy y dressing secreto."},
]

const sandwichs = [
    {id:15, nombre:"8-bit", precio: 1270, ingredientes: "Cebolla, manteca, queso, cheddar y dressing secreto"},
    {id:16, nombre:"Filoso phil", precio: 1520, ingredientes: "Carne cortada a cuchillo, cebolla caramelizada, mermelada de panceta, cheddar, y 1 dressing a elección de lactonesa de chili o ácide de alcaparras"},
    {id:17, nombre:"Power chickens", precio: 1210, ingredientes: "Suprema rebosada, 2 gestas cheddar, cebolla crispy, panceta y dressing secreto"},
    {id:18, nombre:"Basta chickens", precio: 1210, ingredientes: "Sándwich de pollo frito, lechuga repollada, relish de pepinillos y yogur"},
]
const panchos = [
    {id:19, nombre:"Chingón", precio: 760, ingredientes: "Dressing de mayonesa cilantro y limón, choclo, cebolla morada y palta."},
    {id:20, nombre:"Tío Sam", precio: 760, ingredientes: "Cheddar, panceta, cebolla crispy y dressing secreto"},
]
const papas = [
    {id:21, nombre:"Clasicas", precio: 640, ingredientes: "Papas clásicas"},
    {id:22, nombre:"Cheddar", precio: 690, ingredientes: "Papas bañadas con cheddar"},
    {id:23, nombre:"Cheddar y bacon", precio: 850, ingredientes: "Papas bañadas con cheedar y bacon"},
    {id:24, nombre:"Mandiocas fritas", precio: 670, ingredientes: "Bastones crocantes acompañados de 2 dressings caseros a elección"},]
const bebidas = [
    {id:25, nombre:"Coca-cola", precio: 360},
    {id:26, nombre:"Fanta", precio: 360},
    {id:27, nombre:"Sprite", precio: 360},
    {id:28, nombre:"Paso de los toros", precio: 360},
    {id:29, nombre:"Agua", precio: 360},
]


//Mientras que la opción seleccionada no sea 6, se va a seguir ejecutando
let opcion = menu();
while(opcion != "6") {

    //switch para dividir por numeros las secciones de compra
    switch (opcion) {
        case "1":
            hamburguesas.forEach((hamburguesas) => {
                alert(hamburguesas.nombre)            
            });
            

            break;
        case "2":
            let hamburguesa = (prompt("Tenemos las siguientes hamburguesas para ofrecerte:"));
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
        case "3":
            let panchos2 = (prompt("Tenemos los siguientes panchos para ofrecerte: 1. El chingon 2. Tio Sam 3. Panchido"));
            switch (panchos2){
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
        case "4":
            let papasFritas2 = (prompt("Tenemos las siguientes papas para ofrecerte: 1. Comunes 2. Cheddar 3. Cheddar y bacon 4. Bacon"));
                switch (papasFritas2){
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
        case "5":
            let bebidas = (prompt("Tenemos las siguientes papas para ofrecerte: 1. Comunes 2. Cheddar 3. Cheddar y bacon 4. Bacon"));
                switch (bebidas){
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

