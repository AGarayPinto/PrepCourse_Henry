function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  if (numeros.length === 0) return null;
  const sortedNumeros = numeros.sort((a, b) => a - b);
  for (let i = 0; i < sortedNumeros.length - 1; i++) {
    if (sortedNumeros[i + 1] !== sortedNumeros[i] + 1) {
      return sortedNumeros[i] + 1;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;
