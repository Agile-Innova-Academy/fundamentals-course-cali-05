export const deleteData = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    console.log(response)
    if (response.status === 200) {
      alert('Item eliminado exitosamente')
    }
  } catch (error) {
    console.error("Ocurrió un error en la operación de eliminación: -----> " + error)
  }
}