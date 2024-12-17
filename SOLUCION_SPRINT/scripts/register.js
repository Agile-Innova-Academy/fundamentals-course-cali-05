import { registerUser } from "../modulos/api.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // if (!email.endsWith('@agileinnova.org')) {
  //   alert('Su correo debe pertenecer al dominio institucional')
  // }

  const user = {
    name,
    email,
    password,
  };

  console.log(user);
  const result = await registerUser(user);
  if (result) {
    window.location.href = "../index.html";
    alert("Usuario se registró con exito");
  } else {
    alert("Hubo error al registrarse");
  }
});
