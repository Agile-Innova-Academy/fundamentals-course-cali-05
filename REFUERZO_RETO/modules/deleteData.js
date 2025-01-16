export const deleteData = async (url, id) => {
    try {
        const response = await axios.delete(`${url}/${id}`)
        console.log(response)
       // return response.data;
      } catch (error) {
        console.error(error);
      }

}