let nombre = prompt("¡Hola! ¿Cómo te llamas?");

alert(`¡Bienvenido/a la tienda de Ferreteria y Repuestos Emilio, ${nombre}!`);


// Creamos un array vacío para el carrito de compras
const carrito = [];

//Ordenar productos de menor a mayor precio
const ordenarMenorMayor = () => {
    productosFerre.sort((a,b)=> a.precio - b.precio);
    // console.log(productos);
    mostrarListaOrdenada();
}

//Ordenar productos de mayor a menor precio
const ordenarMayorMenor = () => {
    productosFerre.sort((a,b)=> b.precio - a.precio);
    // console.log(productos);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productosFerre.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
}

const comprarProductos = (listaDeProductos) => {
    let otroProducto;
    let productoNombre = '';
    let productoCantidad = 0;

    do {
        productoNombre = prompt ('¿Que producto desea comprar?'+'\n\n'+listaDeProductos.join('\n'));
        productoCantidad = parseInt(prompt('¿Cuántos querés comprar?'));

        const producto = productosFerre.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('El producto no se encuentra en el catálogo.')
        }

        otroProducto = confirm('Desea agregar otro producto?');
    } while (otroProducto)

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad;
    }
}

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoNombre) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1);
            }
        }
    });
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return '- '+producto.nombre+' | Cantidad: '+producto.cantidad
    });

    const confirmar = confirm('Checkout: '
            +'\n\n'+listaProductos.join('\n')
            +'\n\nPara continuar presione "Aceptar" sino "Cancelar" para eliminar productos del carrito."'
    )

    if (confirmar) {
        finalizarCompra(listaProductos)
    } else {
        const productoAEliminar = prompt('Ingrese el nombre del producto a eliminar:')
        eliminarProductoCarrito(productoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0)
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0)
    alert('Detalle de su compra: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de la compra es: $'+precioTotal
        +'\n\nGracias por su compra!'
    )
};

const comprar = () => {
    const productosBaratos = confirm("¿Querés ordenar la lista de productos del más barato al más caro?")
    if (productosBaratos){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
}

comprar();
