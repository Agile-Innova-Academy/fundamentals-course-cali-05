import { deleteData } from "./deleteData.js";
import { patchData } from "./patchData.js";

export const mostrarEmpleados = (contenedor, datos) => {
  contenedor.innerHTML = '';
  datos.forEach((element) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td><button id='Eliminar${element.id}'>Eliminar</button></td>
        <td><button type="button" id=${element.id} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${element.id}">
          Actualizar
        </button></td>

      <div class="modal fade" id="modal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresar nuevos datos</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              <form>
                <input value=${element.name} id="NombreEmpleado${element.id}" type="text" placeholder="Nombre" />
                <input value=${element.age} id="Edad${element.id}" type="number" placeholder="Edad" />
                <input value=${element.city} id="Ciudad${element.id}" placeholder="Ciudad" />
    
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" id='Guardar${element.id}' class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>

      `;

    contenedor.appendChild(tr);


    //ELIMINAR
    const buttonEliminar = document.getElementById(`Eliminar${element.id}`)
    buttonEliminar.addEventListener('click', async () => {

      await deleteData("http://localhost:3000/empleados", element.id)
    })

    //ACTUALIZAR
    const buttonGuardar = document.getElementById(`Guardar${element.id}`)
    buttonGuardar.addEventListener('click', async () => {

      const inputNombre  = document.getElementById(`NombreEmpleado${element.id}`).value
      const inputEdad = document.getElementById(`Edad${element.id}`).value
      const inputCiudad = document.getElementById(`Ciudad${element.id}`).value

      const Actualizado = {
        name: inputNombre,
        age: inputEdad,
        city: inputCiudad

      }

      await patchData("http://localhost:3000/empleados", element.id,Actualizado)
    })

     //AGREGAR FAVORITO
     const botonFavoritos = document.getElementById(`Favorito${element.id}`)
     botonFavoritos.addEventListener('click', async () => {
 
       await postData("http://localhost:3000/favoritos", element)
     })
  });
}

