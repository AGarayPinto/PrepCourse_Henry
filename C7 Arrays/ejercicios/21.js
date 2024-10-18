function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (mesesPedidos.includes(array[i])) {
      resultado.push(array[i]);
    }
  }

  if (resultado.length === mesesPedidos.length) {
    return resultado;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
