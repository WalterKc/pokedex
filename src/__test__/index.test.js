//import { obtenerPagina } from "../service/service.js";

//import { inicializar } from "../index.js";
//jest.mock("../service/service");
//jest.mock("../index")
import "../index";
import { inicializar } from "../index";
jest.mock("../index", () => ({
  inicializar: jest.fn(),
}));

test("inicializa pokedex", () => {
  inicializar();
  expect(inicializar).toHaveBeenCalledTimes(1);
});
