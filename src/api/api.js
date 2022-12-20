export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const LIMITE_POKEMONES = 20;
export async function obtenerPokemones(pagina, limite = LIMITE_POKEMONES) {
  return (
    await fetch(
      BASE_URL + "?offset=" + (pagina - 1) * limite + "&limit=" + limite
    )
  ).json();
}
