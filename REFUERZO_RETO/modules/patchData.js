export const patchData = async (url, id, data) => {
    try {
        const response = await axios.patch(`${url}/${id}`,data)
        console.log(response)
       // return response.data;
      } catch (error) {
        console.error(error);
      }
      
}