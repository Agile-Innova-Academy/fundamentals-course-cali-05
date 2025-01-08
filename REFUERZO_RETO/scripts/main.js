import { getData } from "../modules/getData.js";
import { mostrarPaletas } from "../modules/mostrarPaletas.js";

const contenedor = document.getElementById('contenedorPaletas');

document.addEventListener('DOMContentLoaded', async () => {
  const paletas = await getData();
  mostrarPaletas(contenedor, paletas);
})