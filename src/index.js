import { mostrarPagina } from "./ui/ui.js";
import { obtenerPagina } from "./service/service.js";
export async function inicializar() {
  mostrarPagina(await obtenerPagina(1));
}
inicializar();
