import { getPets } from "../modulos/api.js";

const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", function () {
  window.location.href = "./pages/register.html";
});

async function getDataPets() {
  const containerPets = document.getElementById("carrusel");
  const pets = await getPets();
  containerPets.innerHTML = "";
  if (pets) {
    pets.forEach((pet, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

      carouselItem.innerHTML += `
          <div class="col-12 mb-4">
              <div class="card shadow">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSWjnSd77lh-vRDBbCR0LfDCWgAaLHB-0kw&s" className="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title text-primary">${pet.nombre}</h5>
                      <p class="card-text">
                          <strong>Tipo:</strong> ${pet.tipo} <br>
                          <strong>Edad:</strong> ${pet.edad}
                      </p>
                  </div>
              </div>
          </div>
      `
      containerPets.appendChild(carouselItem);
    });
  } else {
    carouselItem.innerHTML = "<h3>No se puedo cargar la información</h3>";
  }
}

document.addEventListener("DOMContentLoaded", getDataPets);

// function redirigir(){
//   window.location.href = "/pages/register.html"
// }
