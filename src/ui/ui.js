let contenedorPokemones = document.querySelector("#contenedorPokemones");

export async function mostrarPagina(pokemones) {
  await crearLista(contenedorPokemones, pokemones.results.length);
  colocarPokemonesLista(pokemones.results);
}

function crearElementosLista(elementoPadre) {
  let div = document.createElement("div");
  let id = document.createAttribute("id");
  id.value = "pokemon";
  div.setAttributeNode(id);
  elementoPadre.appendChild(div);
}
async function crearLista(elementoPadre, cantidadElementos) {
  for (let i = 0; i < cantidadElementos; i++) {
    crearElementosLista(elementoPadre);
  }
}
function colocarPokemonesLista(nombres) {
  let listaPokemones = document.querySelectorAll("#pokemon");
  for (let i = 0; i < nombres.length; i++) {
    listaPokemones[i].innerHTML = nombres[i].name;
  }
}
