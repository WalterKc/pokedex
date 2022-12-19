import { obtenerPokemones } from "../api/api.js";
export async function obtenerPagina(pagina) {
  return obtenerPokemones(pagina);
}
