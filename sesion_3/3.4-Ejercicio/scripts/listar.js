import { pokemonURL } from "../constants/constants.js"
import { getData } from "../modules/getData.js"
import { showNavbar } from "../modules/navBar.js"

const navbarContainer = document.getElementById('navbarSection')
const pokemonContainer = document.getElementById('pokemonContainer')

document.addEventListener('DOMContentLoaded', () => {
  showNavbar(navbarContainer)
  getData(pokemonURL, pokemonContainer)
})