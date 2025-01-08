document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))

  const userName = document.getElementById("userName")
  const name = document.getElementById("name")

  userName.textContent = `Bienvenido, ${user.name}`
  name.value = user.name
})

const profileForm = document.getElementById("profileForm")

profileForm.addEventListener("submit", (event) => {
  event.preventDefault()

  // Pendiente realizar actualización de la información del usuario

})