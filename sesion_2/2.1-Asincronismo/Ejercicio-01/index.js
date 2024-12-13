const dividir = (dividendo, divisor, miFuncion) => {
    if (divisor === 0) {
        miFuncion({
            error: true,
            message: 'No se puede dividir por 0'
        })
    } else {
        const value = dividendo / divisor;
        miFuncion({
            error: false,
            value
        })
    }
}

dividir( 10, (response) => {
    if (response.error) {
        console.log('Ha ocurrido un error. ', response.message)
    } else {
        console.log('Resultado obtenido correctamente y es: ', response.value)
    }
})