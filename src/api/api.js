export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const LIMITE_POKEMONES = 20;
export async function obtenerPokemones(pagina, limite = LIMITE_POKEMONES) {
  return (
    await fetch(
      BASE_URL + "?offset=" + (pagina - 1) * limite + "&limit=" + limite
    )
  ).json();
}
// a cambiar/traidas
//ok primero, vamos a practicar con esto,....liso
//luego, vamos a hacer que solo muestre los datos en la pagina...listo
//y luego, vamos a ponerles nombres lindos(si es necesario)
//
export async function cargarPokemon(id) {
  return (await fetch(BASE_URL + id)).json();
}
