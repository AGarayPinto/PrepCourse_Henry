function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  array.unshift(elemento);
  return array;
}

module.exports = agregarItemAlComienzoDelArray;
