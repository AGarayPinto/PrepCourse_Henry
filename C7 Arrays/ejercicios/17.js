function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
}

module.exports = agregarNumeros;
