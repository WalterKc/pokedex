export function mostrarPagina(pokemones) {
  let contenedorPokemones = document.querySelector("#contenedor-pokemones");
  for (let i = 0; i < pokemones.length; i++) {
    const pokemon = pokemones[i];
    let div = document.createElement("div");
    let id = document.createAttribute("id");
    let clase = document.createAttribute("class");
    clase.value = "pokemon";
    id.value = pokemon.name;
    div.setAttributeNode(id);
    div.setAttributeNode(clase);
    contenedorPokemones.appendChild(div);
    div.innerHTML = pokemon.name;
  }
}
/// TEST y Cosas
function test(e) {
  console.log(e.target.id);
}
//falta armar el contenido de la pagina
import { obtenerPokemon } from "../service/service.js";
async function mostrarPokemon(e) {
  let datosPokemon = document.querySelector("#pokemon");
  const pokemon = await obtenerPokemon(e.target.id);
  console.log(pokemon);

  datosPokemon.querySelector("#nombre").innerHTML = pokemon.name;
  //son 2 tipos
  //datosPokemon.querySelector("#tipo").innerHTML=pokemon.type
  if (pokemon.types.length > 1) {
    document.querySelector("#tipo").innerText =
      pokemon.types[0].type.name + "/" + pokemon.types[1].type.name;
  } else {
    document.querySelector("#tipo").innerText = pokemon.types[0].type.name;
  }

  datosPokemon.querySelector("#peso").innerHTML = pokemon.weight / 10 + " Kg";
  //son 2 habilidades
  datosPokemon.querySelector("#habilidad").innerHTML =
    pokemon.abilities[0].ability.name + "/" + pokemon.abilities[1].ability.name;
  datosPokemon.querySelector("#altura").innerHTML =
    pokemon.height / 10 + " Mts";
}
document.querySelector("#contenedor-pokemones").onclick = mostrarPokemon;
