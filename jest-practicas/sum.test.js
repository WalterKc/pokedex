import {
  asco_funcion_fecha,
  callback,
  multiplicacion,
  numero_fijo,
  simulacion_de_fetch,
  suma,
  texto_fijo,
  funcion_no_asquerosa,
  traduccion_flecha,
  error,
  f3,
} from "./sum";
beforeEach(() => {
  global.fetch = jest.fn();
});
test("adds 1 + 2 to equal 3", function () {
  expect(suma(1, 2)).toBe(3);
});
test("prueba multiplicacion", function () {
  expect(multiplicacion(2, 3)).toBe(6);
});
test("varias pruevas a un numero fijo", function () {
  expect(numero_fijo()).toBe(8);
  expect(numero_fijo()).toBeGreaterThan(3);
  expect(numero_fijo()).toBeGreaterThanOrEqual(8);
  expect(numero_fijo()).toBeLessThan(11);
  expect(numero_fijo()).toBeLessThanOrEqual(9);
});
test("varias pruebas a un texto fijo", function () {
  expect(texto_fijo()).toMatch(/pepe/);
});

test("el dato es 8", async function () {
  //expect(callback()).toBe(8);
  const dato = await f3();
  expect(dato).toBe(8);
});
test("capturo un error", function () {
  expect(function () {
    error();
  }).toThrow();
  expect(function () {
    error();
  }).toThrow("simulo un error!");

  expect(() => compileAndroidCode()).toThrow();
});
