//Arreglos unidimensionales (Vectores)
//////////////   0    ,   1   ,     2 ,        3 ,       4 ,       5 ,       6
let semana = ["Lunes","Martes","Miercoles", "Jueves","Viernes", "Sabado", "Domingo"]

console.log(semana)
console.log(semana[2])

// Arreglos multidimensionales (matrices)

const matriz = [
/////0,1,2
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9], //2
]

console.log(matriz[1][4]);

const cubo = [
    [   //0
        [1,2,3], // 0
        [4,5,6]  // 1
    ],
    [  //1
        [7,8,9], // 0
        [10,11,12]  // 1
    ]
]

// capa, fila, columna
console.log(cubo);
console.log(cubo[1][0][2]);

// Array Methods

// .............. 0. Métodos modificadores de estructura................

// .push() agrega un elemento al final de la lista

semana.push("PostDomingo")
console.log(semana);

// .pop() Elimina el ultimo elemento de una lista

semana.pop()
console.log(semana);

// .unshift() Agrega un elemento al inicio

semana.unshift("PreLunes")
console.log(semana);

// .shift() elimina el primer elemento de mi array

semana.shift()
console.log(semana);

// .splice() Eliminar o agregar elementos a mi array

//1. Indice a partir del cual modifica el arreglo
//2. # elementos a eliminar
//3. elementos a agregar

const estudiantes = [
    ["Adan","Luis","Mateo","Juan"],
    ["Luisa","Nicolle","Dana", "Angela"]
]
console.log(estudiantes[1][2]);
estudiantes[1].splice(2,0,"Daniela")
console.log(estudiantes[1]);
estudiantes[1].splice(4,0,"Gloria")
console.log(estudiantes[1]);

const nuevosEstudiantes = ["Adrian", "Jose", "Andres"]

estudiantes[0].splice(5,0, ...nuevosEstudiantes)
console.log(estudiantes[0]);

// Métodos iteración 

const listaAccesorios = document.getElementById("listaElementos")
//forEach() Itera sobre cada elemento de un array, ejecutando una serie de instrucciones determinadas

const accesorios = [
    {name: "Correa de cuero", price: 150000, state: "nuevo"},
    {name: "Reloj", price: 200000, state: "nuevo"},
    {name: "Bolso", price: 35000, state: "usado"},
    {name: "Collar", price: 65000, state: "usado"},
    {name: "Pulsera", price: 20000, state: "nueva"}
]


accesorios.forEach((accesorio) => {
/*     const newElement = document.createElement("li")
    newElement.textContent = `${accesorio.name}, $${accesorio.price}`
    listaAccesorios.appendChild(newElement) */
    listaAccesorios.innerHTML += `
        <li>${accesorio.name}, $${accesorio.price}</li>
    ` 
})

// map() itera sobre cada elemento de un array, mutando o transformando el array en el poroceso

function aplicarDescuento( precio, descuento){
    return precio - precio*descuento
}


const accesoriosConDescuento = accesorios.map((accesorio) => {
    return {
        ...accesorio,
        price: aplicarDescuento(accesorio.price, 0.3)
    }
})

console.log(accesoriosConDescuento)


function applyDiscount() {
    listaAccesorios.innerHTML = ""
    accesoriosConDescuento.forEach((accesorio) => {
        listaAccesorios.innerHTML += `
            <li>${accesorio.name}, $${accesorio.price}</li>
        ` 
    })
}


// Métodos de búsqueda/filtro o validación

// .find() Busca dentro del array y me retorna el PRIMER elemento que coincida con el criterio de busqueda

const asequible = accesorios.find((accesorio) => accesorio.price < 50000)
console.log(asequible);

// .filter(): Retorma un nuevo arreglo basado en el criterio establecido

const asequibles = accesorios.filter(accesorio => accesorio.price <= 50000)
console.log(asequibles);

// .some() Valida si almenos un elemento cumple con el criterio dado

const alguno = accesorios.some(accesorio => accesorio.state == "vendido" )

console.log(alguno);

// .every() Valida si todos los elementos cumplen ocn el criterio establecido

const todos = accesorios.every(accesorio => accesorio.price > 40000 )

console.log(todos);

// .sort() me permite organizar los elementos de un array según un patrón

const frutas = ["Manzana", "Banano", "Fresa", "Cereza"]

frutas.sort()
console.log(frutas);

const edades = [22, 15, 26, 44, 11, 18, 55, 32]
edades.sort()
console.log(edades);


edades.sort((a,b) => b - a)
console.log(edades);


accesorios.sort((a,b) => b.price - a.price)

console.log(accesorios);














