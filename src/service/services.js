import { obtenerPokemones } from "../api/api.js";
export async function obtenerPagina(pagina) {
  //return pagina;
  return obtenerPokemones(pagina);
}
