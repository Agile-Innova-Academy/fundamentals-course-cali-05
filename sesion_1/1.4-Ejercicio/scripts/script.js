// ARREGLOS

// Arreglos unidimensionales (vectores)
//////////////     0    ,    1   ,       2 ,        3 ,       4 ,        5 ,       6
const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

console.log(semana[4])

// Arreglos multidimensionales (matrices)

const estudiantes = [
  // 0
  //    0,           1,         2,          3,        4
  ['Margarita', 'Alejandra', 'Angela', 'Yamileth', 'Juan'],
  // 1
  //  0,         1,          2,          3,         4,        5
  ['Daniel', 'Yesenia', 'Valentina', 'Derlyn', 'Emmanuel', 'Miguel']
]

console.log(estudiantes[1][2])

// ARRAY METHODS:

// .............. 0. Métodos modificadores de estructura................

//.push() Agrega al final:
semana.push('PostDomingo')
console.log(semana)

//.pop() Elimina el último:
semana.pop()
console.log(semana)

//.unshift() Agrega al principio:
semana.unshift('PreLunes')
console.log(semana)

//.shift() Elimina el primero:
semana.shift()
console.log(semana)

//.splice() Eliminar o agregar elemntos a mi array.

// semana.splice(
//  1. Indice a partir del cual modifica el arreglo,
//  2. # elementos a eliminar,
//  3. elementos a agregar
// )
estudiantes[0].splice(3, 0, 'Veronica')

const nuevosEstudiantes = ['Kevin', 'Javier', 'Alejandro', 'Julian']

// estudiantes[0].push.apply(nuevosEstudiantes)
// console.log(estudiantes)
estudiantes[1].splice(2, 0, ...nuevosEstudiantes)
console.log(estudiantes)

//.............. 1. Métodos de iteración................
const listaAccesorios = document.getElementById('listaElementos')

// .forEach(): Iterar sobre cada elmento de un array, ejecutando una serie de instrucciones determinadas
const accesorios = [
  { name: 'Cinturón de cuero negro', price: 15000, estado: 'nuevo' },
  { name: 'Corbata elegante', price: 16000, estado: 'nuevo' },
  { name: 'Collar de perlas', price: 150000, estado: 'usado' },
  { name: 'Pulsera de diamantes', price: 250000, estado: 'usado' },
  { name: 'Aretes', price: 50000, estado: 'nuevo' }
]

accesorios.forEach((elemento) => {
  // listaAccesorios.innerHTML += `
  //   <li>${elemento.name}</li>
  // `
  const newElement = document.createElement('li')
  newElement.textContent = `${elemento.name}, $${elemento.price}`
  listaAccesorios.appendChild(newElement)
})

// .map(): Iterar sobre cada elmento de un array, mutando o transformando el array en el proceso

function aplicarDescuento(precio, descuento) {
  return precio - precio*descuento
}

const accesoriosConDescuento = accesorios.map((elemento) => {
  return {
    ...elemento,
    price: aplicarDescuento(elemento.price, 0.25)
    // price: elemento.price,
  }
})

function applyDiscount() {
  listaAccesorios.innerHTML = ''
  accesoriosConDescuento.forEach((elemento) => {
    // listaAccesorios.innerHTML += `
    //   <li>${elemento.name}</li>
    // `
    const newElement = document.createElement('li')
    newElement.textContent = `${elemento.name}, $${elemento.price}`
    listaAccesorios.appendChild(newElement)
  })
}

console.log(accesoriosConDescuento)

//................. 2. Métodos de búsqueda/filtro o validación .......................

// .find(): Buscar dentro de un array, y me retorna EL PRIMER ELEMENTO que coincida con el criterio establecido

const asequible = accesorios.find((elemento) => elemento.price <= 50000)

console.log(asequible)

// .filter(): Retornar un nuevo arreglo basado en el criterio establecido

const asequibles = accesorios.filter((elemento) => elemento.price <= 50000)

console.log(asequibles)

// .some(): Valida si al menos un elemento cumple con un criterio dado
const alguno = accesorios.some((elemento) => elemento.price <= 5000)
console.log(alguno)

// .every(): Valida si TODOS los elementos cumplen con el criterio establecido
const todos = accesorios.every((elemento) => elemento.price <= 500000)
console.log(todos)

// ................ 3. Métodos de transformación/ordenamiento ................
// .sort(): Organizar los elementos de un array según un patrón establecido

const edades = [ 24, 22, 18, 39, 17, 26, 3, 4, 47 ]

const ordenados = edades.sort(function (a, b) {
  return a - b;
})
console.log(ordenados)

// .reduce()

