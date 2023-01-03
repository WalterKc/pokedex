//import { fetch } from "node-fetch";
//const fetch = require("node-fetch");
export async function obtenerNumeroAleatorioAPI() {
  const data = await fetch("http://numbersapi.com/random/year?json", {
    headers: { "Content-Type": "application/json" },
  });
  const dataJ = data.json();
  return dataJ;
}
//otra forma de hacer la api
export const obtenerNumeroAleatorioAPIV2 = async () => {
  try {
    const respuesta = await fetch("http://numbersapi.com/random/year?json", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e;
  }
};
export async function obtenerNumeroAleatorioAPIV3() {
  const respuesta = await fetch("http://numbersapi.com/random/year?json");
  const data = await respuesta.json();
  return data;
}
