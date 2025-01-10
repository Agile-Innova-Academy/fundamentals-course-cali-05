export const getPaleta = async (id) => {
  try {
    const response = await axios.get('http://localhost:3000/paletas/' + id)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}