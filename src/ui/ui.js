let contendenorPokemones = document.querySelector("#contenedorPokemones");

export async function mostrarPagina(arrayPokemones) {
  console.log(await arrayPokemones);
  const pokemones = await arrayPokemones;
  console.log(pokemones.results);
  await crearLista(contendenorPokemones, 20);
  colocarPokemonsEnLista(pokemones.results);
}

function crearElementosDeLista(elementoPadre) {
  let div = document.createElement("div");
  let id = document.createAttribute("id");
  id.value = "pokemon";
  div.setAttributeNode(id);
  elementoPadre.appendChild(div);
}
async function crearLista(elementoPadre, cantidadDeElementos) {
  for (let i = 0; i < cantidadDeElementos; i++) {
    crearElementosDeLista(elementoPadre);
  }
}
async function colocarPokemonsEnLista(nombres) {
  let listaPokemones = document.querySelectorAll("#pokemon");
  for (let i = 0; i < nombres.length; i++) {
    listaPokemones[i].innerHTML = nombres[i].name;
    console.log(nombres[i].name);
  }
}
