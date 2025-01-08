import { getPets, deletePets, updatePets } from "../modulos/api.js";


function getPetIdFromUrl () {
    const params = new URLSearchParams(window.location.search)
    return params.get("petId")
}

async function loadPetDetails(){
    const petId = getPetIdFromUrl()
    const pets = await getPets()
    const pet = pets.find((pet) => pet.id === petId)
    console.log(pet);
    
    const petDetail = document.getElementById("petDetails")
    const btnDeletePet = document.getElementById("deletePet")
    const btnEditPet = document.getElementById("editPet")
    const btnCancelEdit = document.getElementById("cancelEdit")
    const editPetForm = document.getElementById("editPetForm")
    const editName = document.getElementById("editName")
    const editType = document.getElementById("editType")
    const editAge = document.getElementById("editAge")
    const editGender = document.getElementById("editGender")
    const editBreed = document.getElementById("editBreed")
    const editColor = document.getElementById("editColor")

    petDetail.innerHTML = `
    <div>
        <img src="${pet.imagen}" alt="" />
        <h2>${pet.nombre}</h2>
        <p><strong>Tipo:</strong>${pet.tipo} </p>
        <p><strong>Edad:</strong>${pet.edad} </p>
        <p><strong>Genero:</strong>${pet.genero} </p>
        <p><strong>Raza:</strong>${pet.raza} </p>
        <p><strong>Color:</strong>${pet.color} </p>
      </div>
    `

    btnDeletePet.addEventListener("click",  async () => {
        if(confirm("Seguro quieres eliminar esta mascota?")){
            const responseDeletePet = await deletePets(pet.id)
            if (responseDeletePet){
                window.location.href = "../index.html"
                alert("Mascota eliminada con éxito")
            }else{
                alert("Error al eliminar la mascota")
            }
            console.log(responseDeletePet)
        }

    } )

    btnEditPet.addEventListener("click", () => {
        editPetForm.style.display = "block";
        editName.value = pet.nombre
        editType.value = pet.tipo
        editAge.value = pet.edad
        editGender.value = pet.genero
        editBreed.value = pet.raza
        editColor.value = pet.color
    })

    editPetForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const updatePet = {
            ...pet,
            nombre: editName.value,
            tipo: editType.value,
            edad: editAge.value,
            genero: editGender.value,
            raza: editBreed.value,
            color: editColor.value
        };

        const reponseUpdatePets = await updatePets(updatePet)
        if (reponseUpdatePets){
            window.location.reload()
            alert("Mascota actualizada con éxito")
        }else{
            alert("Error al actualizar la mascota")
        }
    })

    btnCancelEdit.addEventListener("click", () => {
        editPetForm.style.display = "none";
    })






}

document.addEventListener("DOMContentLoaded", loadPetDetails);