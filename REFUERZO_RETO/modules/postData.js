export const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data)
      console.log(response)
     // return response.data;
    } catch (error) {
      console.error(error);
    }
  }