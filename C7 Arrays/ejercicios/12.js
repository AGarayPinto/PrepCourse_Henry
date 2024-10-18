function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  return array.map(elemento => typeof elemento === 'string' ? elemento.toUpperCase() : elemento);
}

module.exports = convertirStringAMayusculas;
