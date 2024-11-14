export const showData = (container, data) => {
  container.innerHTML = ''
  data.forEach((item) => {
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
        <button type="button" class="btn btn-secondary">Editar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    `

    container.appendChild(div)
  })
}