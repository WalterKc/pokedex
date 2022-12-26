import { cargarPokemon, obtenerPokemones } from "../api/api.js";

export async function obtenerPagina(pagina) {
  const pokemones = await obtenerPokemones(pagina);
  return pokemones.results;
}
export async function obtenerNumeroPaginas() {
  const numero = await obtenerPokemones();
  return numero.count;
}

export async function obtenerPokemon(nombre) {
  const pokemon = await cargarPokemon(nombre);
  return pokemon;
}
// ok, me canse de esperar, voy a terminar esto, y dejarlo como el otro, y continuemos con el 14
//vamos a hacer el cambio de pagina(sin selector, pero con nav) LISTO
//primero, vamos a hacer el boton siguiente y anterior, siguiendo los conceptos anteriores ya explicados LISTO
//TIENE QUE QUEDAR SIEMPLE Y CON NOMBRES COHERENTES , estoy harto de repetir todo
/*un boton siguiente o anterior, no es mas que una llamana a obtener pagina, por lo que , solo hay que
 *usar un evento de cambio de pagina, y poner el codigo de los botones
 * LISTO
 */

//luego, vamos a hacer el selector de pagina LISTO
/*
 *para hacer esto, primero hay que hacer algo que cuente las paginas que hay LISTO el numero de paginas
 *
 */
//y luego , vamos a poner las imagenes, sin estilo(mas alla del nav), eso lo vamos a dejar para react LISTO
/**
 * para poner las imagenes, tengo que ponerle un child al div ya creado LISTO
 * este child, es su imagen LISTO
 */
//ahora, vamos a ocultar el pokemon selec, y cada vez que se seleciones un pokemon, se oculte el contenedor,
//y se muestre el pokemon,y cuando toquemos el boton volver, pase lo contrario
