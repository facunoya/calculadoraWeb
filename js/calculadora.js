window.addEventListener('load', () => { /* Escuchamos cuando se carga el documento*/
    const display = document.querySelector('.calculator-display') /*.querySelector,se ultiliza para buscar un solo elemento y el primero,
    en cambio getElementByClassName trae todos los elementos de esa clase.*/
    const keypadButtons = document.getElementsByClassName('keypad-button')
    
    /*Creamos otra constante para convertir el HTMLCollection a Array*/
    const keypadButtonsArray = Array.from(keypadButtons)
    
    /* Iteramos por nuestro nuevo array de botones */
    keypadButtonsArray.forEach((button) => {
        /* A cada boton le agregamos un listener */
        button.addEventListener('click', () => {
             calculadora(button, display)
        })
    })
})
function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;
        case '=':
            calcular(display)
            break;    
        default:
            actualizar(display, button) 
            break;    
    }
} 
function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*Toma el string y lo resuelve*/
}
function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = ''
    }
    /*esto concatena los botones uno despues del otro*/ 
    display.innerHTML += button.innerHTML
    /* Esto es igual a: display.innerHTML = display.innerHTML + button.innerHTML */
}

function borrar(display) {
    display.innerHTML = 0
}