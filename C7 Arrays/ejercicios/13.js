function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  return array.filter(numero => numero % 2 === 0);
}

module.exports = filtrarNumerosPares;
