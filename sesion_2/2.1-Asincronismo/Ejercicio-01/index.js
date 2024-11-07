//                  10          4
const dividir = (dividendo, divisor, miFuncion) => {
    if (divisor === 0) {
        miFuncion({
            error: true,
            message: 'No se puede dividir por 0'
        })
    } else {
//                      10      /    4
        const value = dividendo / divisor;
        miFuncion({
            error: false,
            value
        })
    }
}

dividir(
    10, //dividendo
    0,  //divisor
    (response) => {
    if (response.error) {
        console.log('Ha ocurrido un error. ', response.message)
    } else {
        console.log('Resultado obtenido correctamente y es: ', response.value)
    } // función callback
})

// dividir(10, 0, (err, result) => {
//     if (err) {
//         console.log('Ha ocurrido un error', err.message)
//     } else {
//         console.log('Resultado obtenido correctamente y es: ', result.value)
//     }
// })