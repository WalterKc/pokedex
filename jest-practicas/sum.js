import { obtenerNumeroPaginas } from "../src/service/service";

export function suma(a, b) {
  return a + b;
}
//module.exports = suma;
export function multiplicacion(a, b) {
  return a * b;
}
export function numero_fijo() {
  return 8;
}
export function texto_fijo() {
  return "pepe";
}
export function callback() {
  return numero_fijo();
}

export async function simulacion_de_fetch() {
  const numero = await obtenerNumeroPaginas();
  return numero;
}
//ESTAN LAS 3 MAL, que ASCO
//OK, el problema, es que estoy haciendo cualquiera con el set time out, hay que practicarlo
export let asco_funcion_fecha = async () => {
  setTimeout(() => "algo", 1000);
};
let test;
// otra traduccion
export let traduccion_flecha = async () => {
  setTimeout(() => {
    "algo";
  }, 1000);
};
// traducamos este asco, a algo mas lindo
export const funcion_no_asquerosa = async function () {
  setTimeout(function () {
    return "algo";
  }, 1000);
};

//este asco por ej
let sum_asco = (a, b) => a + b;
//es esta hermosura
let sum_bueno = function (a, b) {
  return a + b;
};
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Hecho!"), 1000);
  });

  let result = await promise; // espera hasta que la promesa se resuelva (*)

  alert(result); // "¡Hecho!"
}

//f();
//traducion
async function f2() {
  let promise = new Promise(function (resolve, reject) {
    return setTimeout(function () {
      return resolve("hecho");
    }, 1000);
  });
  let result = await promise;
  alert(result);
}
//f2();
export async function f3() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(8);
    }, 1000);
  });

  let result = await promise;

  return result;
}

//f3();
export function error() {
  throw new Error("simulo un error!");
}

export let numAleatorio = function obtenerNumeroAleatorio() {
  return Math.random();
};
export const numAleatorio2 = () => Math.random();
