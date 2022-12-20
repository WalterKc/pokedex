import { obtenerPokemones } from "../api/api.js";
export async function obtenerPagina(pagina) {
  const pokemones = await obtenerPokemones(pagina);
  return pokemones.results;
}
