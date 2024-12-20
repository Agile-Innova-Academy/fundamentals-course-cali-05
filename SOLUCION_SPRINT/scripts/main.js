import { getPets } from "../modulos/api.js";

const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", function () {
  window.location.href = "./pages/register.html";
});

function redirectToDetails(petId){
  window.location.href = `./pages/detail.html?pedId=${petId}`
}

async function getDataPets() {
  const containerPets = document.getElementById("carrusel");
  const pets = await getPets();
  containerPets.innerHTML = "";
  if (pets) {
    pets.forEach((pet, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
      const divImg = document.createElement("div");
      divImg.className = "card shadow imageContainer"
      const img = document.createElement("img");
      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSWjnSd77lh-vRDBbCR0LfDCWgAaLHB-0kw&s"
      img.alt = pet.nombre
      img.className = "card-img-top"

      img.addEventListener("click", ()  => {
        window.location.href = `./pages/detail.html?petId=${pet.id}`
      })

      divImg.appendChild(img)
      carouselItem.appendChild(divImg)
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
