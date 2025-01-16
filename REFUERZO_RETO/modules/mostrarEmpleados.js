import { deleteData } from "./deleteData.js";

export const mostrarEmpleados = (contenedor, datos) => {
    contenedor.innerHTML = '';
    datos.forEach((element) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td><button id=${element.id}>Eliminar</button></td>

      `;
  
      // Hasta este punto del código, se creó lo siguiente:
  
      // <div class="paleta">
      //   <img src="${element.image}" alt="${element.name}" id="11">
      // </div>
  
      contenedor.appendChild(tr);

      const buttonEliminar = document.getElementById(element.id)
      buttonEliminar.addEventListener('click', async () => {

        await deleteData("http://localhost:3000/empleados", element.id)
      })
  
      // const imagenPaletas = document.getElementById(element.id);
      // imagenPaletas.addEventListener('click', () => {
      //   window.location.href = `./pages/paleta.html?id=${element.id}`
      // })
    });
  }