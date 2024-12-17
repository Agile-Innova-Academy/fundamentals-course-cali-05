import { ENDPOINTS } from './urls.js'

export async function getPets(){
    try {
        const responsePet = await fetch(ENDPOINTS.pets)
        const data = await responsePet.json()
        console.log("data", data)
        return data
    } catch(error) {
        console.log(error)
        return []
    } 
}

export async function registerUser(user) {
    try{
        console.log("registro usuario");
        console.log(ENDPOINTS.users);
        
        const responseUser = await fetch(ENDPOINTS.users, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        const newUser = await responseUser.json()
        console.log("Nuestro usuario se registró exitosamente", newUser);
        return newUser

    } catch(error) {
        console.log(error)
        return null
    } 
    
}