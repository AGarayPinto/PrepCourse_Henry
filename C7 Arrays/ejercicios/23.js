function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
  const resultado = [];
  for (let mes of array) {
    if (mesesPedidos.includes(mes)) {
      resultado.push(mes);
    }
  }
  return resultado.length === mesesPedidos.length ? resultado : "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
