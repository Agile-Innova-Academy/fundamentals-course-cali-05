import { getData } from "../modules/getData.js";
import { mostrarPaletas } from "../modules/mostrarPaletas.js";

const contenedor = document.getElementById('contenedorPaletas');

document.addEventListener('DOMContentLoaded', async () => {
  const paletas = await getData();
  mostrarPaletas(contenedor, paletas);
})

const formulario = document.querySelector('form')

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputBusqueda = document.getElementById('inputBusqueda').value
  const paletas = await getData();

  // const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
  // const result = words.filter((word) => word.length > 6);
  // sentence.includes(word)


  const result = paletas.filter((paleta) => paleta.name.toLowerCase().includes(inputBusqueda.toLowerCase()))
  console.log(result)

  mostrarPaletas(contenedor, result);
  //                               iterador               condición
  // const miExamen = examenes.filter((examen) => examen.nombre === 'Luisa Zuluaga')
})

// const boton = document.getElementById('botonSaludo')

// boton.addEventListener('click', () => {
//   alert('Hola')
// })

const boton2 = document.getElementById('botonApertura')

boton2.addEventListener('click', () => {
  alert('Adios')
})