export const mostrarPaletas = (contenedor, datos) => {
  console.log(contenedor)
  console.log(datos)

  datos.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('paleta');
    div.innerHTML = `
      <img src="${element.image}" alt="${element.nombre}">
    `;
    contenedor.appendChild(div);
  });
}