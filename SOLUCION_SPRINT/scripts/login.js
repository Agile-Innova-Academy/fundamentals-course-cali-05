import { getUsers } from "../modulos/api.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = await getUsers();

  const userExists = users.find(user => user.email === email)
  if (userExists) {
    if (userExists.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(userExists));
      window.location.href = "./home.html";
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("El correo ingresado no existe");
  }
});
