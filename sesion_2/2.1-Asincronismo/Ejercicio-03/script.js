const contenedor = document.getElementById('productsContainer')
const selector = document.getElementById('productsSelector')

async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// LISTAR PRODUCTOS
async function traerProductos() {
  const productos = await getProducts()
  console.log(productos)

  let products = '';

  productos.forEach(product => {
    products += `
      <div class="product-card">
        <img src=${product.image} class="product-image" />
        <h4 class="product-title">${product.title}</h4>
        <p class="product-description">${product.description}</p>
        <span>${product.price}</span>
      </div>
    `
    contenedor.innerHTML = products;
  })
}

// MOSTRAR CATEGORÍAS

document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts()

  const categories = new Set();

  products.forEach(product => {
    categories.add(product.category)
  })

  let options = ''

  categories.forEach(category => {
    options += `<option value="${category}">${category}</option>`
  })

  selector.innerHTML = options
})

//BUSCAR POR CATEGORÍAS

selector.addEventListener('change', async (e) => {
  const products = await getProducts()

  const newProducts = products.filter(product => product.category === e.target.value)
  
  let items = ''

  newProducts.forEach(product => {
    items += `
      <div class="product-card">
        <img src=${product.image} class="product-image" />
        <h4 class="product-title">${product.title}</h4>
        <p class="product-description">${product.description}</p>
        <span>${product.price}</span>
      </div>
    `
    contenedor.innerHTML = items;
  })
})
