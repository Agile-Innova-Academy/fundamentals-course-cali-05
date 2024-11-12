export function showData(container, pokemon, isSearching) {
  isSearching ? container.innerHTML = '' : null
  const { name, sprites, types } = pokemon;

  const card = document.createElement("div");
  card.classList.add("pokemonCard");

  card.innerHTML = `
    <img src="${sprites.front_default}" alt="${name}">
    <h2>${name}</h2>
    <p>Types: ${types.map(type => type.type.name).join(", ")}</p>
  `;

  container.appendChild(card);
}