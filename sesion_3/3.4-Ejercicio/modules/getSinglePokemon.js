import { showData } from "./showData.js";

export function getSinglePokemon(url, nombre, container) {
  fetch(url + nombre)
    .then(response => response.json())
    .then(data => {
      showData(container, data, true);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Promise resolved')
    })
} 