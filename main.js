// Declaramos una array con los productos
const productos = [
    // hambuguesas
    {
        id: "1",
        titulo: "Gringa criolla",
        imagen: "./img/hamburguesas/GringaCriolla.jpg",
        ingredientes:"Doble cheddar, lechuga repollada, tomate rodajas de pepinillos agridulce, mayones de morrones y cebolla a la plancha",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1210
    },
    {
        id: "2",
        titulo: "Smoker",
        imagen: "./img/hamburguesas/Smoker.jpg",
        ingredientes: "Lechuga escarola, queso ahumado, sweetchili con vinagre, chorizo colorado y morrón rojo sudado en sus propios jugos.",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1290
    },
    {
        id: "3",
        titulo: "Burguesa",
        imagen: "./img/hamburguesas/Burguesa.jpg",
        ingredientes: "Pickles de remolacha y tomillo, hojas de rúcula, puré de hongos al malbec y dressing de crema de mostaza en grano y miel",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1290
    },
    {
        id: "4",
        titulo: "Fusión",
        imagen: "./img/hamburguesas/Fusion.jpg",
        ingredientes: "Panceta crocante, blend de queso mozzarella, parmesano gruyere fundidos con cebolla caramelizada y ketchup",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1290
    },
    {
        id: "5",
        titulo: "Monster",
        imagen: "./img/hamburguesas/monster.jpg",
        ingredientes: "3 discos de care, 3 fetas de cheddar, 2 festas de atuel, aderezo staker",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1460
    },
    {   id: "6",
        titulo: "Chill Queen",
        imagen: "./img/hamburguesas/ChillQueen.jpg",
        ingredientes: "Medallón de 120 gramos, queso cheddar, cebolla, tomate, lechuga y dressing secreto.",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 910
    },
    {   id: "7",
        titulo: "Smashed burger",
        imagen: "./img/hamburguesas/Smash.jpg",
        ingredientes: "Carne smash, cebolla y manteca",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesas"
        },
        precio: 1210
    },
    {   id: "8",
        titulo: "Ricky Fort",
        imagen: "./img/hamburguesas/Rickyfort.jpg",
        ingredientes:"Blend de queso roquefort y nueces, tomate, láminas de cebolla curadas en limón y panceta crocante",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1290
    },
    {   id: "9",
        titulo: "California Cheese",
        imagen: "./img/hamburguesas/CaliforniaCheese.jpg",
        ingredientes:"Cheddar, lechuga repollada, tomate, aros de cebolla morada, salsa stacker, pan con escamas de parmesano",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1210
    },
    {   id: "10",
        titulo: "California Bacon",
        imagen: "./img/hamburguesas/CaliforniaBacon.jpg",
        ingredientes: "Cheddar, lechuga repollada, tomate, aros de cebolla morada, salsa stacker, panceta.",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1210
    },
    {   id: "11",
        titulo: "Cheese",
        imagen: "./img/hamburguesas/Cheese.jpg",
        ingredientes: "Pan, carne, queso y dressing secreto",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1080
    },
    {   id: "12",
        titulo: "Cheddalier",
        imagen: "./img/hamburguesas/Cheddalier.jpg",
        ingredientes: "Cheddar, panceta, cebolla crispy y dressing secreto.",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1210
    },
    {   id: "13",
        titulo: "Green power",
        imagen: "./img/hamburguesas/GreenPower.jpg",
        ingredientes: "Medallón de porotos blancos, lechuga, quinoa roja y remolacha asada, blend de quesos y cebolola caramelizada, con dressing de puré de plata y limón",
        categoria: {
        nombre: "Hamburguesas",
        id: "hamburguesas"
        },
        precio: 1210
},
    // Sandwichs
    {   id: "13",
        titulo: "8-bit",
        imagen: "./img/sandwiches/8-bit.jpg",
        ingredientes: "Cebolla, manteca, queso, cheddar y dressing secreto",
        categoria: {
        nombre: "Sandwiches",
        id: "sandwichs"
        },
        precio: 1270
    },
    {   id: "14",
        titulo: "Filoso Phil",
        imagen: "./img/sandwiches/FilosoPhil.jpg",
        ingredientes: "Carne cortada a cuchillo, cebolla caramelizada, mermelada de panceta, cheddar, y 1 dressing a elección de lactonesa de chili o ácide de alcaparras",
        categoria: {
        nombre: "Sandwiches",
        id: "sandwichs"
        },
        precio: 1520
    },
    {
        id: "15",
        titulo: "Basta chickens",
        imagen: "./img/sandwiches/BastaChickens.jpg",
        ingredientes: "Sándwich de pollo frito, lechuga repollada, relish de pepinillos y yogur",
        categoria: {
            nombre: "Sandwiches",
            id: "sandwichs"
        },
        precio: 1210
    },
    
    // Panchos
    {
        id: "16",
        titulo: "El chingon",
        imagen: "./img/panchos/Chingon.jpg",
        ingredientes: "Dressing de mayonesa cilantro y limón, choclo, cebolla morada y palta",
        categoria: {
            nombre: "Panchos",
            id: "panchos"
        },
        precio: 760
    },
    // Papas 
    {
        id: "18",
        titulo: "Clasicas",
        imagen: "./img/papas/papas.jpg",
        ingredientes: "Papas clásicas",
        categoria: {
            nombre: "papas",
            id: "papas"
        },
        precio: 640
    },
    {
        id: "19",
        titulo: "Cheddar",
        imagen: "./img/papas/cheddar.jpg",
        ingredientes: "Papas bañadas con cheddar",
        categoria: {
            nombre: "papas",
            id: "papas"
        },
        precio: 690
    },
    {
        id: "20",
        titulo: "Cheddar bacon",
        imagen: "./img/papas/Cheddarbacon.jpg",
        ingredientes: "Papas bañadas con cheedar y bacon",
        categoria: {
            nombre: "papas",
            id: "papas"
        },
        precio: 850
    },
    {
        id: "21",
        titulo: "Mandiocas Fritas",
        imagen: "./img/papas/MandiocasFritas.jpg",
        ingredientes: "Bastones crocantes acompañados de 2 dressings caseros a elección",
        categoria: {
            nombre: "Papas",
            id: "papas"
        },
        precio: 670
    },
    //Bebidas
    {
        id: "22",
        titulo: "Coca-Cola",
        imagen: "./img/bebidas/Coca-cola.jpg",
        ingredientes: "Coca-cola de 500ml",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 360
    },
    {
        id: "23",
        titulo: "Fanta",
        imagen: "./img/bebidas/fanta.jpg",
        ingredientes: "Fanta de 500ml",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 360
    },
    {
        id: "24",
        titulo: "Sprite",
        imagen: "./img/bebidas/sprite.jpg",
        ingredientes: "Sprite de 500ml",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 360
    },
    {
        id: "25",
        titulo: "Paso de los toros",
        imagen: "./img/bebidas/pasodelostoros.jpg",
        ingredientes: "Paso de los toros de 500ml",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 360
    },
    {
        id: "26",
        titulo: "Agua",
        imagen: "./img/bebidas/agua.jpg",
        ingredientes: "Agua de 500ml",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 360
    },
];

//Llamamos al DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

//Declaramos una función para cargar los productos que se muestran
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <h4 class="producto-ingredientes">${producto.ingredientes}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

//Dividimos el contenido por categorias
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "menu") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Menú completo";
            cargarProductos(productos);
        }

    })
});
//Actualimos los botones para agregar al carrito
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
//Hacemos la parte del carrito
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}
//Definimos una función para cargar al carrito
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}