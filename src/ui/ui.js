export function mostrarPagina(pokemones) {
  crearListaPokemones(pokemones);
}

function crearListaPokemones(pokemones) {
  let contenedorPokemones = document.querySelector("#contenedorPokemones");

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
