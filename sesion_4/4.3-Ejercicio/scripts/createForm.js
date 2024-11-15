import { heroesURL } from "../helpers/constants.js"
import { postData } from "../helpers/postData.js"

const formulario = document.getElementById('heroesForm')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const newHero =   {
    "id": crypto.randomUUID(),
    "superhero": document.getElementById("nameInput").value,
    "publisher": document.getElementById("publisherInput").value,
    "alter_ego": document.getElementById("alterEgoInput").value,
    "first_appearance": document.getElementById("firstAppearanceInput").value,
    "image": document.getElementById("imageInput").value
  }

  postData(heroesURL, newHero)
  window.location = "../index.html"
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })
})