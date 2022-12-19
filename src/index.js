import { mostrarPagina } from "./ui/ui.js";
import { obtenerPagina } from "./service/services.js";
async function inicializar() {
  mostrarPagina(obtenerPagina(1));
}
inicializar();
