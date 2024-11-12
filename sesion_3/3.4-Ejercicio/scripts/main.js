import { dividir, multiplicar } from "../modules/aritmeticas.js"
import { showNavbar } from "../modules/navBar.js"

const navbarContainer = document.getElementById('navbarSection')

document.addEventListener('DOMContentLoaded', () => {
  showNavbar(navbarContainer)

  const num1 = Number(prompt('Ingrese número 1'))
  const num2 = Number(prompt('Ingrese número 1'))

  console.log('El resultado de la multiplicación es: ' + multiplicar(num1, num2))
  console.log('El resultado de la división es: ' + dividir(num1, num2))
})