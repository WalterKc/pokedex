import {
  obtenerNumeroAleatorioAPI,
  obtenerNumeroAleatorioAPIV2,
  obtenerNumeroAleatorioAPIV3,
} from "../api-de-test/api";
export const obtenerNumeroAleatorio = async () => {
  const numeroAleatorio = await obtenerNumeroAleatorioAPI();
  return numeroAleatorio;
};
