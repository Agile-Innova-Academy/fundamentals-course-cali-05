const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // if (!email.endsWith('@agileinnova.org')) {
  //   alert('Su correo debe pertenecer al dominio institucional')
  // }

  const user = {
    name,
    email,
    password,
  }

  console.log(user)
})