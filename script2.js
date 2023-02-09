//Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).
//primer intento, sin la parte extra:
/*function palabrasEnFrase() {
  let frase = prompt("Inserte una frase");
  let fraseSeparada = frase.split(" ");
  alert(`Tu frase tiene ${fraseSeparada.length} palabras`);
}*/

//Extra: Supón que el usuario puede equivocarse y poner más de un espacio entre palabras, nuestro programa debe seguir contando bien las palabras.
function palabrasEnFrase() {
  let frase = prompt("Inserte una frase");
  let fraseSeparada = frase.split(" ");

  for (let i = 0; i < fraseSeparada.length; i++) {
    if (fraseSeparada[i] == "") {
      fraseSeparada.splice(i, 1);
    }
  }
  alert(`Tu frase tiene ${fraseSeparada.length} palabras`);
}
