// Arreglo de objetos de 6 productos (id, nombre, precio, desc, imagen)
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
