// Array para almacenar los productos del carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    // Preguntamos cuántas unidades quiere agregar
    let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto} deseas agregar al carrito?`));

    // Verificamos si la cantidad ingresada es válida
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    // Calculamos el total por este producto
    let totalProducto = precio * cantidad;

    // Agregamos el producto y su cantidad al carrito
    carrito.push({ producto: producto, precio: totalProducto, cantidad: cantidad });

    alert(`${cantidad} unidad(es) de ${producto} ha(n) sido agregada(s) al carrito. Total: $${totalProducto}`);
}

// Función para calcular y mostrar el total del carrito
function verTotalCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }

    // Pedimos el nombre del comprador
    let nombre = prompt("Por favor, ingresa tu nombre:");

    // Verificamos si el nombre es válido
    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Calculamos el total sumando los precios de los productos en el carrito
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);

    // Mostramos el total en la consola
    alert(`${nombre}, el total del carrito es: $${total}`);
}

// Función para manejar la encuesta
function manejarEncuesta(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de la encuesta
    let satisfaccion = document.querySelector('input[name="satisfaccion"]:checked');
    let recomendacion = document.querySelector('input[name="recomendacion"]:checked');
    let comentarios = document.getElementById("comentarios").value;

    // Validación de la encuesta
    if (!satisfaccion || !recomendacion) {
        alert("Por favor, completa todas las preguntas.");
        return;
    }

    // Crear un mensaje con los resultados
    let mensaje = `Gracias por tu opinión!\n\nSatisfacción: ${satisfaccion.value}\nRecomendación: ${recomendacion.value}\nComentarios: ${comentarios}`;

    // Mostrar el mensaje en una alerta o en el DOM
    alert(mensaje);

    // Limpiar el formulario después del envío
    document.querySelector("form").reset();
}

// Agregar un evento al formulario para capturar la encuesta
document.querySelector("form").addEventListener("submit", manejarEncuesta);
