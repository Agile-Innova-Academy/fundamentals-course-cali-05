
import { getData } from "../helpers/getData.js";
import { heroesURL } from "../helpers/constants.js";
import { showData } from "../modules/showData.js";

const container = document.getElementById('heroesContainer');

document.addEventListener('DOMContentLoaded', async () => {
  const datos = await getData(heroesURL)
  showData(container, datos)
})