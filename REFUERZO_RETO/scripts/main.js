import { getData } from "../modules/getData.js";
import { mostrarEmpleados } from "../modules/mostrarEmpleados.js";
import { mostrarPaletas } from "../modules/mostrarPaletas.js";
import { postData } from "../modules/postData.js";

const contenedor = document.getElementById('contenedorPaletas');
const NuevosEmpleados = document.getElementById("NuevosEmpleados")

document.addEventListener('DOMContentLoaded', async () => {
  const paletas = await getData("http://localhost:3000/paletas");
  console.log(paletas)
  mostrarPaletas(contenedor, paletas);

  const empleados = await getData("http://localhost:3000/empleados");
  console.log(empleados)
  mostrarEmpleados(NuevosEmpleados, empleados)

})

const formulario = document.querySelector('form')

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputBusqueda = document.getElementById('inputBusqueda').value
  const paletas = await getData("http://localhost:3000/paletas");

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

// boton2.addEventListener('click', () => {
//   alert('Adios')
// })



const FormularioEmpleados = document.getElementById("Formulario")

FormularioEmpleados.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputNombreEmpleado = document.getElementById('NombreEmpleado').value
  const inputEdad = document.getElementById('Edad').value
  const inputCiudad = document.getElementById('Ciudad').value

  const NuevoEmpleado = {
    id: crypto.randomUUID(),
    name: inputNombreEmpleado,
    age: inputEdad,
    city: inputCiudad
    }

  postData("http://localhost:3000/empleados", NuevoEmpleado)
})