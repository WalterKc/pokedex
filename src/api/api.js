export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const LIMITE_POKEMONES = 20;

/*
export async function cargarPokemones(offset = 0, limite = LIMITE_POKEMONES) {
  return (await fetch(`${BASE_URL}?offset=${offset}&limit=${limite}`)).json();
}

export async function obtenerDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();
  return api;
}

export async function EnviarUrlNueva(numeroDePagina) {
  let urlPagina =
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector;

  return urlPagina;
}
*/
export async function obtenerPokemones(pagina, limite = LIMITE_POKEMONES) {
  return (
    await fetch(BASE_URL + "?offset=" + (pagina - 1) * 20 + "&limit=" + limite)
  ).json();
}
