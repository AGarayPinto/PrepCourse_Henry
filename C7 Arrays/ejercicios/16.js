function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  return array.map((elemento, indice) => elemento * indice);
}

module.exports = multiplicarElementosPorIndice;
