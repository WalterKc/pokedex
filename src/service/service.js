import { cargarPokemon, obtenerPokemones } from "../api/api.js";

export async function obtenerPagina(pagina) {
  const pokemones = await obtenerPokemones(pagina);
  return pokemones.results;
}

export async function obtenerPokemon(id) {
  const pokemon = await cargarPokemon(id);
  return pokemon;
}
