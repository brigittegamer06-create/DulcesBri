let total = 0;

function agregarAlCarrito(nombre, precio) {
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const totalTexto = document.getElementById('total');
  totalTexto.textContent = `Total: Bs. ${total.toFixed(2)}`;
}

