let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalTexto = document.getElementById('total');
  lista.innerHTML = '';
  total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - Bs. ${item.precio.toFixed(2)} `;
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);
    lista.appendChild(li);
    total += item.precio;
  });

  totalTexto.textContent = `Total: Bs. ${total.toFixed(2)}`;
}


