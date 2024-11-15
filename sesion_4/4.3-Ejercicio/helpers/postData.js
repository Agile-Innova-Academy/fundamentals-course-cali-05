export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response)
    if (response.status === 201) {
      alert('Item creado exitosamente')
      window.location = "../index.html"
    }
  } catch (error) {
    console.error("Ocurrió un error en la operación de escritura: -----> " + error)
  }
}