// Arreglo de objetos de productos de especialidad (id, nombre, precio, desc, imagen)
const productos = [
    {
        id: 1,
        nombre: "Espresso Especial",
        precio: 2500,
        desc: "Granos de origen único con notas de chocolate y frutos rojos.",
        imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600"
    },
    {
        id: 2,
        nombre: "Latte de Lavanda",
        precio: 3800,
        desc: "Deliciosa combinación de espresso, leche vaporizada y un toque de lavanda orgánica.",
        imagen: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600"
    },
    {
        id: 3,
        nombre: "Croissant Artesanal",
        precio: 2200,
        desc: "Hojaldre 100% mantequilla, horneado diariamente en nuestro taller.",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
    },
    {
        id: 4,
        nombre: "Cappuccino Clásico",
        precio: 3200,
        desc: "Equilibrio perfecto de espresso, leche caliente y una densa capa de espuma.",
        imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600"
    },
    {
        id: 5,
        nombre: "Muffin de Arándanos",
        precio: 2500,
        desc: "Muffin esponjoso repleto de arándanos silvestres frescos y crumble crujiente.",
        imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600"
    },
    {
        id: 6,
        nombre: "Tarta de Frambuesa",
        precio: 3900,
        desc: "Base crujiente de masa sable con crema pastelera y frambuesas frescas.",
        imagen: "https://images.unsplash.com/photo-1519869325930-281384150729?w=600"
    },
    {
        id: 7,
        nombre: "Flat White",
        precio: 3200,
        desc: "Doble shot de espresso con una capa fina de leche aterciopelada y cremosa.",
        imagen: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600"
    },
    {
        id: 8,
        nombre: "Cold Brew Nitro",
        precio: 3500,
        desc: "Café extraído en frío por 18 horas e infundido con nitrógeno para una textura suave.",
        imagen: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600"
    },
    {
        id: 9,
        nombre: "Cinnamon Roll (Rol de Canela)",
        precio: 2800,
        desc: "Masa danesa suave enrollada con canela premium y glaseado de queso crema.",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
    },
    {
        id: 10,
        nombre: "Mocha Blanco Helado",
        precio: 4200,
        desc: "Espresso, chocolate blanco premium, leche fría y hielo, coronado con crema batida.",
        imagen: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=600"
    },
    {
        id: 11,
        nombre: "Matcha Latte Orgánico",
        precio: 3900,
        desc: "Té verde matcha de grado ceremonial batido con leche vaporizada a elección.",
        imagen: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600"
    },
    {
        id: 12,
        nombre: "Cheesecake de Maracuyá",
        precio: 3800,
        desc: "Base de galleta crujiente, crema suave de queso y cobertura brillante de maracuyá.",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600"
    },
    {
        id: 13,
        nombre: "Affogato al Cacao",
        precio: 3400,
        desc: "Una bola de helado artesanal de vainilla ahogada en un shot de espresso caliente.",
        imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
    },
    {
        id: 14,
        nombre: "Brownie con Nueces",
        precio: 2400,
        desc: "Brownie húmedo de chocolate bitter al 70% con nueces picadas, horneado en casa.",
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
    },
    {
        id: 15,
        nombre: "Tarta de Limón",
        precio: 3600,
        desc: "Clásica masa dulce rellena de crema de limón ácida y cubierta con merengue suizo dorado.",
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
    }
];

// Función para recorrer el arreglo y renderizar los productos en el DOM
const renderizarProductos = (listaProductos = productos) => {
    // Seleccionar el contenedor en el DOM
    const contenedor = document.querySelector(".products-container");
    
    // Verificar que el contenedor exista para evitar errores
    if (!contenedor) return;

    // Inicializar variable para acumular el código HTML
    let contenidoHTML = "";

    // Recorrer el arreglo usando .forEach()
    listaProductos.forEach(producto => {
        contenidoHTML += `
            <article class="product-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.desc}</p>
                <span class="price">$${producto.precio.toLocaleString('es-CL')}</span>
            </article>
        `;
    });

    // Si no hay productos que mostrar, añadir mensaje amistoso
    if (contenidoHTML === "") {
        contenidoHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); font-size: 1.1rem; width: 100%;">No se encontraron especialidades con ese nombre.</p>`;
    }

    // Asignar el contenido acumulado al contenedor usando innerHTML
    contenedor.innerHTML = contenidoHTML;
};

// Función para configurar el buscador dinámico
const inicializarBuscador = () => {
    // Seleccionar el input de búsqueda usando querySelector
    const inputBusqueda = document.querySelector("#search-input");
    
    if (!inputBusqueda) return;

    // Escuchar el evento 'input' para búsqueda dinámica
    inputBusqueda.addEventListener("input", (evento) => {
        // Obtener el texto ingresado en minúsculas para una comparación insensible a mayúsculas
        const textoIngresado = evento.target.value.toLowerCase();

        // Crear un arreglo temporal con let para los productos filtrados
        let productosFiltrados = [];

        // Recorrer el arreglo original usando .forEach()
        productos.forEach(producto => {
            // Usar 'if' para verificar si el nombre coincide con el texto ingresado
            if (producto.nombre.toLowerCase().includes(textoIngresado)) {
                productosFiltrados.push(producto);
            }
        });

        // Volver a renderizar solo los productos filtrados
        renderizarProductos(productosFiltrados);
    });
};

// Ejecutar la renderización y la inicialización de la búsqueda al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    inicializarBuscador();
});
