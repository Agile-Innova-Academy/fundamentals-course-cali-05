import { pokemonURL } from "../constants/constants.js"
import { getSinglePokemon } from "../modules/getSinglePokemon.js"
import { showNavbar } from "../modules/navBar.js"

const navbarContainer = document.getElementById('navbarSection')
const pokemonContainer = document.getElementById('pokemonContainer')
const formulario = document.getElementById('searchForm')

document.addEventListener('DOMContentLoaded', () => {
  showNavbar(navbarContainer)
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const busqueda = document.getElementById('searchInput').value;
  getSinglePokemon(pokemonURL, busqueda, pokemonContainer)
})

