function contarParesConContinue(numeros) {
  // La función recibe un array de números por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  let cantidadPares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;
    }
    cantidadPares++;
  }
  return cantidadPares;
}

module.exports = contarParesConContinue;
