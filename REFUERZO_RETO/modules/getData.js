export const getData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/paletas')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}