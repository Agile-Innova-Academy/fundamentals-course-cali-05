export const searchData = (data, input) => {
  const result = data.filter((item) => item.superhero.toLowerCase().includes(input.toLowerCase()))
  return result;
}