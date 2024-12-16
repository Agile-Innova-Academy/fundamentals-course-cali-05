// setTimeout(() => {
//   console.log("Hola Estudiantes")
// }, 5000);

// setTimeout(() => {
//   console.log("Hola Chicos")
// }, 3000);

// setTimeout(() => {
//   console.log("Hola Chicas")
// }, 6000);

// setTimeout(() => {
//   console.log("Estoy en la segunda clase")
// }, 1000);

// setTimeout(() => {
//   console.log("Estamos aprendiendo")
// }, 0);


console.log("Iniciar")

function segunda() {
  setTimeout(() => {
    console.log("Segunda")
  }, 6000)
}

function primera() {
  setTimeout(() => {
    console.log("Primera")
  }, 4000)
  segunda();
  // setTimeout(() => {
  //   console.log("Segunda")
  // }, 1000)
  console.log("Listo para la tercera")
}

primera()
console.log("Final")

// Iniciar,Tres, Final, Primera - Segunda