import { ENDPOINTS } from './urls.js'

export async function getPets() {
    try {
        const responsePet = await fetch(ENDPOINTS.pets)
        const data = await responsePet.json()
        console.log("data", data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function updatePets(updatePet) {
    try {
        const responseUpdatePet = await fetch(ENDPOINTS.pets+"/"+updatePet.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatePet)

        })
        return responseUpdatePet.ok
    } catch (error) {
        console.error("Error al actualizar la mascota:", error)
        return false;
    }
}

export async function deletePets(petId) {
    try {
        const responseDeletePet = await fetch(ENDPOINTS.pets+"/"+petId, {method: "DELETE"})
        return responseDeletePet.ok
    } catch (error) {
        console.error("Error al Eliminar la mascota:", error)
        return false;
    }
} 


export async function getUsers() {
    try {
        const responsePet = await fetch(ENDPOINTS.users)
        const data = await responsePet.json()
        console.log("data", data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function registerUser(user) {
    try {
        const responseUser = await fetch(ENDPOINTS.users, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const newUser = await responseUser.json()
        return newUser

    } catch (error) {
        console.error(error)
        return null
    }

}

