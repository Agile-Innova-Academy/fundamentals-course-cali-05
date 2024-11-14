export const getData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ocurrió un error en la operación de lectura: -----> " + error)
  }
}