import { obtenerPokemon } from "../service/service.js";
import { obtenerPagina } from "../service/service.js";
let PAGINA = 0;
let PAGINAS_TOTALES = 0;
let primeraPaginaHecha = false;
export async function mostrarPagina(pokemones) {
  let contenedorPokemones = document.querySelector("#contenedor-pokemones");
  console.log(pokemones);
  if (!primeraPaginaHecha) {
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
      //por aca abajo, pongo las imagenes, puede estar mal planteado, asi que lo separo
      let pokemonDatos = await obtenerPokemon(pokemon.name);
      let img = document.createElement("img");
      let idImg = document.createAttribute("id");
      idImg.value = "imagen";
      let src = document.createAttribute("src");
      src.value = pokemonDatos.sprites.front_default;
      img.setAttributeNode(idImg);
      img.setAttributeNode(src);
      div.appendChild(img);
    }
    PAGINA = 1;
    primeraPaginaHecha = true;
    obtenerPaginasTotales(pokemones.length);
  } else {
    for (let i = 0; i < pokemones.length; i++) {
      const pokemon = pokemones[i];
      contenedorPokemones.querySelectorAll(".pokemon")[i].id = pokemon.name;
      contenedorPokemones.querySelectorAll(".pokemon")[i].innerText =
        pokemon.name;
      let pokemonDatos = await obtenerPokemon(pokemon.name);
      let img = document.createElement("img");
      let idImg = document.createAttribute("id");
      idImg.value = "imagen";
      let src = document.createAttribute("src");
      src.value = pokemonDatos.sprites.front_default;
      img.setAttributeNode(idImg);
      img.setAttributeNode(src);
      contenedorPokemones.querySelectorAll(".pokemon")[i].appendChild(img);
    }
  }
}
async function obtenerPaginasTotales(pokemonesPorPagina) {
  //console.log(await obtenerNumeroPaginas());
  PAGINAS_TOTALES = Math.ceil(
    (await obtenerNumeroPaginas()) / pokemonesPorPagina
  );
  //console.log(PAGINAS_TOTALES);
  let paginas = document.querySelector("#selector-pagina");
  for (let i = 0; i < PAGINAS_TOTALES; i++) {
    let option = document.createElement("option");
    let id = document.createAttribute("id");
    id.value = i + 1;
    option.innerText = i + 1;
    option.setAttributeNode(id);
    paginas.appendChild(option);
  }
}
//este de aca abajo, se puede sacar
function cambiarPagina(pagina) {
  mostrarPagina(pagina);
  //console.log(pagina)
}

async function traerImagen(pokemonRequerido) {
  //tengo una idea, una funcion cruzada, uso los nombres que me manda el crearpagina, y se los envio
  //al servicio que me trae un pokemon,y con eso, pongo las imagenes
  //algo asi
  let pokemon = await pokemonRequerido;
  let img = document.createElement("img");
  let id = document.createAttribute("id");
  id.value = "imagen";
  let src = document.createAttribute("src");
  src.value = await pokemon.sprites.front_default;
  img.setAttributeNode(id);
  img.setAttributeNode(src);
  return pokemon;
  listaPokemonesActivos[i].appendChild(img);
  //let pokemon1 = await obtenerPokemon(pokemon);
  //return pokemon1;
  //y armo desde aca
}

function mostrarPokemon(pokemon) {
  let datosPokemon = document.querySelector("#pokemon");
  //const pokemon = await obtenerPokemon(e.target.id);
  datosPokemon.querySelector("#nombre").innerHTML = pokemon.name;
  if (pokemon.types.length > 1) {
    document.querySelector("#tipo").innerHTML =
      pokemon.types[0].type.name + "/" + pokemon.types[1].type.name;
  } else {
    document.querySelector("#tipo").innerHTML = pokemon.types[0].type.name;
  }
  datosPokemon.querySelector("#peso").innerHTML = pokemon.weight / 10 + " Kg";
  datosPokemon.querySelector("#habilidad").innerHTML =
    pokemon.abilities[0].ability.name + "/" + pokemon.abilities[1].ability.name;
  datosPokemon.querySelector("#altura").innerHTML =
    pokemon.height / 10 + " Mts";
}
/// esto lo voy a dejar asi, total es super facil revertirlo

async function selecionarPokemon(e) {
  mostrarPokemon(await obtenerPokemon(e.target.id));
}
//Falta con el valor maximo, pero lo vamos a dejar para cuando tenga el contador de paginas
async function selecionarPagina(e) {
  console.log(e.target.id);
  if (e.target.id === "boton-siguiente") {
    PAGINA += 1;

    //cabia adelante
    //cambiarPagina(await obtenerPagina(PAGINA));
    mostrarPagina(await obtenerPagina(PAGINA));
    /*
    if (PAGINA > 1) {
      document.querySelector("#boton-anterior").hidden = false;
    }
    */
  } else if (e.target.id === "boton-anterior") {
    /*
    if (PAGINA === 1) {
      document.querySelector("#boton-anterior").hidden = true;
    }
    */
    PAGINA -= 1;
    //cambiarPagina(await obtenerPagina(PAGINA));
    mostrarPagina(await obtenerPagina(PAGINA));

    //cambia atras
  } else if (Number(document.querySelector("#selector-pagina").value) > 0) {
    //console.log(Number(document.querySelector("#selector-pagina").value));
    mostrarPagina(
      await obtenerPagina(
        Number(document.querySelector("#selector-pagina").value)
      )
    );
    PAGINA = Number(document.querySelector("#selector-pagina").value);
  }

  document.querySelector("#selector-pagina").value = PAGINA;
  if (PAGINA > 1 && PAGINA !== PAGINAS_TOTALES) {
    document.querySelector("#boton-anterior").hidden = false;
    document.querySelector("#boton-siguiente").hidden = false;
  }
  if (PAGINA === 1) {
    document.querySelector("#boton-anterior").hidden = true;
  }
  if (PAGINA === PAGINAS_TOTALES) {
    document.querySelector("#boton-siguiente").hidden = true;
    document.querySelector("#boton-anterior").hidden = false;
  } else if (PAGINA > 1) {
    document.querySelector("#boton-anterior").hidden = false;
  }

  //cambiarPagina()
  ///
}
import { obtenerNumeroPaginas } from "../service/service.js";

document.querySelector("#contenedor-pokemones").onclick = selecionarPokemon;
document.querySelector("#boton-siguiente").onclick = selecionarPagina;
document.querySelector("#boton-anterior").onclick = selecionarPagina;
//
document.querySelector("#ir-pagina").onclick = selecionarPagina;
