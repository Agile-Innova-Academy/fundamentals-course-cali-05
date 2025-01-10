export const mostrarPaletas = (contenedor, datos) => {
  contenedor.innerHTML = '';
  datos.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('paleta');
    div.innerHTML = `
      <img src="${element.image}" alt="${element.name}" id="${element.id}">
    `;

    // Hasta este punto del código, se creó lo siguiente:

    // <div class="paleta">
    //   <img src="${element.image}" alt="${element.name}" id="11">
    // </div>

    contenedor.appendChild(div);

    const imagenPaletas = document.getElementById(element.id);
    imagenPaletas.addEventListener('click', () => {
      window.location.href = `./pages/paleta.html?id=${element.id}`
    })
  });
}