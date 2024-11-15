
import { getData } from "../helpers/getData.js";
import { heroesURL } from "../helpers/constants.js";
import { showData } from "../modules/showData.js";
import { searchData } from "../helpers/searchData.js";

const container = document.getElementById('heroesContainer');

document.addEventListener('DOMContentLoaded', async () => {
  const datos = await getData(heroesURL)
  showData(container, datos)
  // window.scrollTo({
  //   top: document.body.scrollHeight,
  //   behavior: "smooth"
  // })

  const formularioBusqueda = document.getElementById('searchForm')

  formularioBusqueda.addEventListener('submit', async (e) => {
    e.preventDefault()
    const busqueda = document.getElementById('searchInput').value;
    const resultado = searchData(datos, busqueda)
    showData(container, resultado)
  })

  // Función para realizar busqueda a medida que el usuario ingresa caracteres en el input
  // const inputBusqueda = document.getElementById('searchInput')

  // inputBusqueda.addEventListener('input', (e) => {
  //   // console.log(e.target.value)
  //   const resultado = searchData(datos, e.target.value)
  //   showData(container, resultado)
  // })  
})

