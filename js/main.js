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
        imagen: "https://www.tulipan.es/-/media/Project/Upfield/Brands/Flora/Tulipan-ES-clone/Assets/Recipes/Sync-Images/d12acdb0-9068-4ba0-ab11-06ca02fcba89.jpg?rev=b9851e8c083d4ee3be316cefe7ca2e3b&w=1600"
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
        imagen: "https://cdn.blog.paulinacocina.net/wp-content/uploads/2023/04/3_20230410_094455_0002.jpg"
    },
    {
        id: 10,
        nombre: "Mocha Blanco Helado",
        precio: 4200,
        desc: "Espresso, chocolate blanco premium, leche fría y hielo, coronado con crema batida.",
        imagen: "https://tofuu.getjusto.com/orioneat-local/resized2/EJMSHnBcTNJLgedst-300-x.webp"
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
        imagen: "https://i.ytimg.com/vi/9DyZIC7pdD8/maxresdefault.jpg"
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
        imagen: "https://bakemark.com/wp-content/uploads/2024/08/Untitled-2560-x-1707-px-1-768x512.png.webp"
    },
    {
        id: 15,
        nombre: "Tarta de Limón",
        precio: 3600,
        desc: "Clásica masa dulce rellena de crema de limón ácida y cubierta con merengue suizo dorado.",
        imagen: "https://www.bekiacocina.com/images/cocina/0000/512-h.jpg"
    }
];

// Arreglo mutable (con let) para guardar los IDs favoritos y persistirlos en LocalStorage
let favoritos = JSON.parse(localStorage.getItem("cafeteria_favoritos")) || [];

// Variable de estado (con let) para controlar el filtro de favoritos activo
let mostrarSoloFavoritos = false;

// Variables de estado para la paginación de productos
let productosMostrados = [...productos];
let paginaActual = 1;
const productosPorPagina = 5;

// Función para recorrer el arreglo y renderizar los productos en el DOM
const renderizarProductos = () => {
    // Seleccionar el contenedor en el DOM
    const contenedor = document.querySelector(".products-container");

    // Verificar que el contenedor exista para evitar errores
    if (!contenedor) return;

    // Calcular paginación
    const totalPaginas = Math.ceil(productosMostrados.length / productosPorPagina);

    // Asegurarse de que paginaActual no esté fuera de rango
    if (paginaActual > totalPaginas) {
        paginaActual = Math.max(1, totalPaginas);
    }

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosMostrados.slice(inicio, fin);

    // Inicializar variable para acumular el código HTML
    let contenidoHTML = "";

    // Recorrer el arreglo usando .forEach()
    productosPagina.forEach(producto => {
        // Verificar si el producto actual está en la lista de favoritos
        const esFavorito = favoritos.includes(producto.id);
        const iconoCorazon = esFavorito ? "fa-solid fa-heart favorito" : "fa-regular fa-heart";

        contenidoHTML += `
            <article class="product-card">
                <div class="product-image-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <button class="btn-favorito" data-id="${producto.id}" aria-label="Favorito">
                        <i class="${iconoCorazon}"></i>
                    </button>
                </div>
                <h3>${producto.nombre}</h3>
                <p>${producto.desc}</p>
                <span class="price">$${producto.precio.toLocaleString('es-CL')}</span>
            </article>
        `;
    });

    // Si no hay productos que mostrar, añadir mensaje amistoso
    if (contenidoHTML === "") {
        contenidoHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); font-size: 1.1rem; width: 100%;">No se encontraron especialidades.</p>`;
    }

    // Asignar el contenido acumulado al contenedor usando innerHTML
    contenedor.innerHTML = contenidoHTML;

    // Renderizar los controles de paginación
    renderizarPaginacion(totalPaginas);
};

// Función para renderizar los controles de paginación en el DOM
const renderizarPaginacion = (totalPaginas) => {
    const contenedorPaginacion = document.querySelector("#pagination-container");
    if (!contenedorPaginacion) return;

    // Si hay 1 o menos páginas, ocultar los controles de paginación
    if (totalPaginas <= 1) {
        contenedorPaginacion.innerHTML = "";
        return;
    }

    let contenidoHTML = "";

    // Botón Anterior
    contenidoHTML += `
        <button class="btn-paginacion" ${paginaActual === 1 ? "disabled" : ""} data-pagina="${paginaActual - 1}" aria-label="Página anterior">
            <i class="fa-solid fa-chevron-left"></i> Anterior
        </button>
    `;

    // Botones de número de página (pestañas)
    for (let i = 1; i <= totalPaginas; i++) {
        contenidoHTML += `
            <button class="btn-paginacion ${paginaActual === i ? "active" : ""}" data-pagina="${i}">
                Pág. ${i}
            </button>
        `;
    }

    // Botón Siguiente
    contenidoHTML += `
        <button class="btn-paginacion" ${paginaActual === totalPaginas ? "disabled" : ""} data-pagina="${paginaActual + 1}" aria-label="Página siguiente">
            Siguiente <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    contenedorPaginacion.innerHTML = contenidoHTML;

    // Asignar manejadores de eventos
    const botones = contenedorPaginacion.querySelectorAll(".btn-paginacion");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const nuevaPagina = parseInt(boton.dataset.pagina);
            if (!isNaN(nuevaPagina) && nuevaPagina !== paginaActual) {
                paginaActual = nuevaPagina;
                renderizarProductos();

                // Hacer scroll suave hacia la sección de productos para mejorar la navegación
                const seccionProductos = document.querySelector("#menu");
                if (seccionProductos) {
                    seccionProductos.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
};

// Función flecha para mostrar una alerta flotante (toast) en pantalla
// Recibe el mensaje a mostrar y el tipo de alerta ('success' o 'info')
const mostrarAlerta = (mensaje, tipo) => {
    // Obtener o crear el contenedor de toasts
    let contenedorToast = document.querySelector("#toast-container");
    if (!contenedorToast) {
        contenedorToast = document.createElement("div");
        contenedorToast.id = "toast-container";
        document.body.appendChild(contenedorToast);
    }

    // Seleccionar ícono según el tipo de alerta
    let icono = tipo === "success" ? "fa-solid fa-heart" : "fa-regular fa-heart";

    // Crear el elemento toast dinámicamente
    let toast = document.createElement("div");
    toast.classList.add("toast", `toast-${tipo}`);
    toast.innerHTML = `<i class="${icono}"></i><span>${mensaje}</span>`;

    // Insertar en el contenedor
    contenedorToast.appendChild(toast);

    // Animar la entrada del toast (un frame después para que CSS detecte el cambio)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.add("mostrar");
        });
    });

    // Remover el toast después de 3 segundos con animación de salida
    setTimeout(() => {
        toast.classList.remove("mostrar");
        // Esperar a que termine la transición antes de eliminar del DOM
        toast.addEventListener("transitionend", () => toast.remove());
    }, 3000);
};

// Función flecha para alternar el estado de favorito de un producto
// Recibe el ID del producto como parámetro
const alternarFavorito = (idProducto) => {
    // Buscar si el producto ya existe en el arreglo de favoritos
    let index = favoritos.indexOf(idProducto);

    // Usar if para verificar: si no existe (index === -1), agregar; si existe, remover
    if (index === -1) {
        // El producto NO está en favoritos: agregar al arreglo con push()
        favoritos.push(idProducto);

        // Buscar el nombre del producto para personalizar el mensaje
        let productoEncontrado = productos.find(p => p.id === idProducto);
        let nombreProducto = productoEncontrado ? productoEncontrado.nombre : "Producto";

        // Mostrar alerta de éxito: producto agregado
        mostrarAlerta(`¡${nombreProducto} agregado a favoritos!`, "success");
    } else {
        // El producto SÍ está en favoritos: remover con splice()
        favoritos.splice(index, 1);

        // Buscar el nombre del producto para personalizar el mensaje
        let productoEncontrado = productos.find(p => p.id === idProducto);
        let nombreProducto = productoEncontrado ? productoEncontrado.nombre : "Producto";

        // Mostrar alerta informativa: producto removido
        mostrarAlerta(`${nombreProducto} eliminado de favoritos.`, "info");
    }

    // Guardar la lista actualizada en LocalStorage para persistencia
    localStorage.setItem("cafeteria_favoritos", JSON.stringify(favoritos));

    // Refrescar la visualización manteniendo la página actual
    filtrarYRenderizar(false);
};

// Función unificada para filtrar y renderizar según la búsqueda y el filtro de favoritos
const filtrarYRenderizar = (resetearPagina = true) => {
    const inputBusqueda = document.querySelector("#search-input");
    const texto = inputBusqueda ? inputBusqueda.value.toLowerCase() : "";

    // Crear un arreglo temporal con let
    let filtrados = [];

    // Recorrer el arreglo usando .forEach()
    productos.forEach(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(texto);
        const coincideFavorito = !mostrarSoloFavoritos || favoritos.includes(producto.id);

        // Usar if para verificar si el producto cumple con ambos criterios
        if (coincideBusqueda && coincideFavorito) {
            filtrados.push(producto);
        }
    });

    // Actualizar la lista global de productos a mostrar
    productosMostrados = filtrados;

    if (resetearPagina) {
        paginaActual = 1;
    }

    // Renderizar
    renderizarProductos();
};

// Función para configurar el buscador dinámico
const inicializarBuscador = () => {
    // Seleccionar el input de búsqueda usando querySelector
    const inputBusqueda = document.querySelector("#search-input");

    if (!inputBusqueda) return;

    // Escuchar el evento 'input' para búsqueda dinámica
    inputBusqueda.addEventListener("input", () => filtrarYRenderizar(true));
};

// Función para configurar el sistema de favoritos y la delegación de eventos
const inicializarFavoritos = () => {
    const contenedor = document.querySelector(".products-container");
    const btnMostrarFavoritos = document.querySelector("#btn-mostrar-favoritos");

    if (!contenedor || !btnMostrarFavoritos) return;

    // Delegación de eventos (addEventListener) para gestionar clics en botones de favoritos
    contenedor.addEventListener("click", (evento) => {
        // Capturar el botón de favorito más cercano al elemento clickeado
        const botonFavorito = evento.target.closest(".btn-favorito");
        if (!botonFavorito) return;

        // Capturar el ID del producto desde el atributo data-id del botón
        let idProducto = parseInt(botonFavorito.dataset.id);

        // Llamar a la función flecha alternarFavorito con el ID capturado
        alternarFavorito(idProducto);
    });

    // Filtro de favoritos (Mis Favoritos / Todos los Productos)
    btnMostrarFavoritos.addEventListener("click", () => {
        mostrarSoloFavoritos = !mostrarSoloFavoritos;

        // Modificar clases del botón y texto de forma dinámica
        if (mostrarSoloFavoritos) {
            btnMostrarFavoritos.classList.add("active");
            btnMostrarFavoritos.innerHTML = `<i class="fa-solid fa-heart"></i> Todos los Productos`;
        } else {
            btnMostrarFavoritos.classList.remove("active");
            btnMostrarFavoritos.innerHTML = `<i class="fa-regular fa-heart"></i> Mis Favoritos`;
        }

        // Refrescar la visualización reiniciando a la página 1
        filtrarYRenderizar(true);
    });
};

// Ejecutar la renderización y la inicialización al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    inicializarBuscador();
    inicializarFavoritos();
});
