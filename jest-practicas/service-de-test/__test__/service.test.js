//ACA VAMOS A PRACTICAR DISTISTOS MOCKs BASICOS
import { numAleatorio, suma } from "../../sum";
import { obtenerNumeroAleatorio } from "../../service-de-test/service.js";
//import { obtenerNumeroAleatorioAPIV2 } from "../../api-de-test/api.js";
//import { obtenerNumeroAleatorioAPI } from "../../api de test/api.js";
import { obtenerNumeroPaginas } from "../../../src/service/service";
//
//jest.mock("../sum.js");
/*
beforeEach(() => {
  global.fetch = jest.fn();
});
*/

test("ejemplo", () => {
  const mock = jest.fn();
  //console.log(mock);
  mock("hola");
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("hola");
});

/// ok, los mocks, no sirven para funciones deterministas, se usan para funciones que el valor cambia
//con cada uso, o para funciones con retraso o que dependa de una api/base de datos de algun tipo
//vamos a hacer 2 ejemplos, solo para que quede claro
/*
test("ejemplo 2", () => {
  const mock = suma(2, 2);
  //mock();
  expect(suma(2, 2)).toHaveBeenCalled();
});
*/
const numeroAleatorio = 0.123456789;

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(numeroAleatorio);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("retorna un valor aleatorio ", () => {
  // pasa porque estamos controlando el comportamiento de Math.random
  //
  expect(numAleatorio()).toBe(numeroAleatorio);
  const a = suma(2, 2);
  expect(suma(2, 2)).toBe(4);
  // otra posible asersión:
  //expect(Math.random).toHaveBeenCalled();
});
///mmmmmm, esto se puede hacer de una manera diferente, acordate de que podes "mokear" una funcion
//podes replicar su funcionamiento,vamos a intentar hacer eso
//el problema que tenia era, que babel no entiende lo que es el import, ni el json
//pero, es posible mokear esto, podemos reescribirlo aca, para que de lo que necesito
//para esto, vamos a crear una promesa, que devuelva la estructura del json
//POR FAVOR, entende bien estas funciones flechas, por que va a ser esencial para entender
//jest y los mocks de manera efectiva.... FALLO lo de arriba,

const numeroTest = 19;
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ count: 19 }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("prueba de api", async () => {
  const respuesta = await obtenerNumeroPaginas();
  //console.log(respuesta);
  expect(respuesta).toEqual(18);
});

//ok, estoy podrido de esto, vamos a terminar esto rapido, y empecemos con react de una vez
