function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   return arrayOfStrings.filter(elemento => elemento.startsWith("a"));
 }
 
 module.exports = filter;
 