import { getData } from '../modules/getData.js'
import { mostrarEmpleados } from '../modules/mostrarEmpleados.js'
import { mostrarPaletas } from '../modules/mostrarPaletas.js'
import { postData } from '../modules/postData.js'

const contenedor = document.getElementById('contenedorPaletas')
const NuevosEmpleados = document.querySelector('#NuevosEmpleados')

document.addEventListener('DOMContentLoaded', async () => {
  const paletas = await getData('http://localhost:3001/paletas')
  console.log(paletas)
  mostrarPaletas(contenedor, paletas)

  const empleados = await getData('http://localhost:3001/empleados')
  console.log(empleados)
  mostrarEmpleados(NuevosEmpleados, empleados)

  // 'time' es mi nuevo arreglo que incluye el tiempo en días del empleado en la empresa
  const time = empleados.map(empleado => {
    const fechaInicial = new Date(empleado.joined)
    const fechaActual = new Date()
    const tiempoEmpleado = Math.floor(
      (fechaActual - fechaInicial) / (1000 * 60 * 60 * 24)
    )

    return {
      ...empleado,
      tiempoEmpleado
    }
  })

  console.log(time)

  const scores = empleados.map(empleado => {
    let suma = 0

    empleado.scores.forEach(score => {
      suma += score
    })
    const promedio = suma / empleado.scores.length

    return {
      id: empleado.id,
      nombre: empleado.name,
      promedio
    }
  })
  console.log(scores)

  const edad = empleados.map(empleado => {
    // let estado
    // if (empleado.active === true) {
    //   estado = 'Activo'
    // } else {
    //   estado = 'Inactivo'
    // }
    console.log(empleado.active)

    return {
      estado: empleado.active ? 'activo' : 'inactivo',
      edad: empleado.age
    }
  })

  console.log(edad)
})

const formulario = document.querySelector('form')

formulario.addEventListener('submit', async e => {
  e.preventDefault()
  const inputBusqueda = document.getElementById('inputBusqueda').value
  const paletas = await getData('http://localhost:3001/paletas')

  // const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
  // const result = words.filter((word) => word.length > 6);
  // sentence.includes(word)

  const result = paletas.filter(paleta =>
    paleta.name.toLowerCase().includes(inputBusqueda.toLowerCase())
  )
  console.log(result)

  mostrarPaletas(contenedor, result)
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

const FormularioEmpleados = document.getElementById('Formulario')

FormularioEmpleados.addEventListener('submit', async e => {
  e.preventDefault()
  const inputNombreEmpleado = document.getElementById('NombreEmpleado').value
  const inputEdad = document.getElementById('Edad').value
  const inputCiudad = document.getElementById('Ciudad').value
  const inputFecha = document.getElementById('fechaIngreso').value

  const NuevoEmpleado = {
    id: crypto.randomUUID(),
    name: inputNombreEmpleado,
    age: inputEdad,
    city: inputCiudad,
    joined: inputFecha
  }

  postData('http://localhost:3001/empleados', NuevoEmpleado)
})
