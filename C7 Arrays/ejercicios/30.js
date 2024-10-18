function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  const seen = new Set();
  for (let numero of numeros) {
    if (seen.has(numero)) {
      return numero;
    }
    seen.add(numero);
  }
  return null;
}

module.exports = encontrarElementoRepetido;
