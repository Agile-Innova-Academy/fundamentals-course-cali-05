import { getPaleta } from "../modules/getPaleta.js"
const contenedor= document.getElementById("contenedorPaleta")

document.addEventListener("DOMContentLoaded", async () => {
  const parametros = new URLSearchParams(window.location.search)
  const id = parametros.get("id")
  const paleta = await getPaleta(id)

  contenedor.innerHTML = `
    <img src="${paleta.image}" alt="${paleta.name}" width="100%" />
    <h1>${paleta.name}</h1>
  `

})