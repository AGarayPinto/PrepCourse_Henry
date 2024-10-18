function productoEntreNúmeros(a, b) {
  if (a > b) [a, b] = [b, a]; // Intercambiar si a es mayor que b
  let producto = 1;
  for (let i = a; i <= b; i++) {
    if (i === 0) return 0; // Si encontramos un 0, el producto será 0
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;
