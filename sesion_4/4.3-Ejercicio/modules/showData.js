import { heroesURL } from "../helpers/constants.js"
import { deleteData } from "../helpers/deleteData.js"
import { patchData } from "../helpers/patchData.js"

export const showData = (container, data) => {
  container.innerHTML = ''
  data.reverse().forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.style.width = '18rem'

    div.innerHTML = `
      <img src=${item.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.superhero}</h5>
        <p class="card-text">${item.alter_ego}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.publisher}</li>
        <li class="list-group-item">${item.first_appearance}</li>
      </ul>
      <div class="card-body">
        <button type="button" id=${item.id} class="btn btn-secondary edit-btn" data-bs-toggle="modal" data-bs-target="#EditModal${item.id}">Editar</button>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal${item.id}">Eliminar</button>
      </div>

      <!-- Edit Modal -->
      <div class="modal fade" id="EditModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Editar ${item.superhero}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <form class="d-flex flex-column gap-2 updateForm">
                <input class="form-control me-2" id="editNameInput${item.id}" type="text" placeholder="Nombre">
                <input class="form-control me-2" id="editAlterEgoInput${item.id}" type="text" placeholder="Alter Ego">
                <input class="form-control me-2" id="editPublisherInput${item.id}" type="text" placeholder="Publicador">
                <input class="form-control me-2" id="editFirstAppearanceInput${item.id}" type="text" placeholder="Primera Aparición">
                <input class="form-control me-2" id="editImageInput${item.id}" type="text" placeholder="URL de la imágen">
                <button class="btn btn-success" type="submit">Actualizar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Modal -->
      <div class="modal fade" id="DeleteModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Eliminar ${item.superhero}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ¿Estás seguro de eliminar este elemento?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" id=${item.id} class="btn btn-danger delete-btn">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `
    
    //Función a ejecutar al escuchar el evento click para cada botón de Editar
    //Me traerá los valores actuales de cada carta para mostrar en los respectivos inputs
    const editBtn = div.querySelector('.edit-btn')

    editBtn.addEventListener('click', (e) => {
      const elementToEdit = data.find((item) => item.id === e.target.id);

      // Cargar los valores en los inputs
      document.getElementById(`editNameInput${item.id}`).value =  elementToEdit.superhero
      document.getElementById(`editAlterEgoInput${item.id}`).value =  elementToEdit.alter_ego
      document.getElementById(`editPublisherInput${item.id}`).value =  elementToEdit.publisher
      document.getElementById(`editFirstAppearanceInput${item.id}`).value =  elementToEdit.first_appearance
      document.getElementById(`editImageInput${item.id}`).value =  elementToEdit.image
    })

    //Evento submit para actualizar las cartas
    const editForm = div.querySelector('.updateForm')

    editForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const newValues = {
        "superhero": document.getElementById(`editNameInput${item.id}`).value,
        "publisher": document.getElementById(`editPublisherInput${item.id}`).value,
        "alter_ego": document.getElementById(`editAlterEgoInput${item.id}`).value,
        "first_appearance": document.getElementById(`editFirstAppearanceInput${item.id}`).value,
        "image": document.getElementById(`editImageInput${item.id}`).value
      }

      patchData(heroesURL, item.id, newValues)
    })

    //Evento click para el botón de Eliminar
    const deleteBtn = div.querySelector('.delete-btn')

    deleteBtn.addEventListener('click', (e) => {
      deleteData(heroesURL, e.target.id)
    })

    container.appendChild(div)
  })
}