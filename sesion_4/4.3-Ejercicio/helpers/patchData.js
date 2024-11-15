export const patchData = async (url, id, data) => {
  try {
    // const response = await fetch(`${url}/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })

    // Usando axios...

    const response = await axios.patch(`${url}/${id}`, data)

    console.log(response)
    if (response.status === 200) {
      alert('Item actualizado exitosamente')
    }
  } catch (error) {
    console.error("Ocurrió un error en la operación de actualización: -----> " + error)
  }
}