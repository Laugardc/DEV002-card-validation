import validator from './validator.js';

const buttonValidator = document.getElementById("btn");//Traigo al elemento button de html
const inputValidator = document.getElementById("inputNumero");//Traigo al elemento input numero

//console.log(buttonValidator);
//console.log(inputValidator);

buttonValidator.addEventListener('click', function () {//voy a agregar un evento 'click' a mi button
    const isValid = validator.isValid(inputValidator.value);//para que cuando suceda el eventl, del valor de mi input numero corra la funcion isValid que esta dentro de validator.
    if (isValid === true){
        alert('Tarjeta valida');//si es true mi validator, va a arrojarme alerta Tarjeta valida
    } else {
        alert('Tarjeta invalida');//sino, tarjeta invalida
    }
});


