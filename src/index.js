import validator from './validator.js';

const buttonValidator = document.getElementById("btn");//Traigo al elemento button de html
const inputValidator = document.getElementById("inputNumero");//Traigo al elemento input numero
const parrafoMask= document.getElementById("tarjetaMask");// Traigo al elemento parrafoMask 

buttonValidator.addEventListener('click', function () {//voy a agregar un evento 'click' a mi button
    const isValid = validator.isValid(inputValidator.value);//para que cuando suceda el evento, del valor de mi input numero corra la funcion isValid que esta dentro de validator.
    if (isValid === true){
        alert('Tarjeta valida');//si es true mi validator, va a arrojarme alerta Tarjeta valida
    } else {
        alert('Tarjeta invalida');//sino, tarjeta invalida
    }
});

inputValidator.addEventListener('keyup', function () {//Este evento pasa cada que sueltan tecla en mi inputNumero
    const stringMaskify = validator.maskify(inputValidator.value);//cree una variable para que en mi funcion maskiky entre el valor del inputValidator. Entra el string de inputNumero y sale mi string con #y ultimos 4 digitos
    console.log(stringMaskify);
    console.log('keyup'); 
    parrafoMask.textContent= stringMaskify;//aqui el string que entra ya con el maskify, sale en un parrafo de texto con la mask visual en la interfaz, el parrafo va a tener lo que hace mi funcion maskify
});

inputValidator.addEventListener('input', function (){
   this.value = this.value.replace(/[^0-9#]/g, '').replace(/(\..*)\./g, '$1');// con esto no permito que entren otros valores que no sean numeros y #, 
});

