const validator = {
  isValid: function (cardNumber) { //declaro la funcion
    const arrayNumbers = cardNumber.split(''); //Paso el string a un array
    const newArrayNumbers = [];//declaro un nuevo array para guardar sumas
    //console.log(arrayNumbers);
    for (let i = 0; i <= arrayNumbers.length - 1; i++) {//Recorro el array hasta el largo del arreglo -1 (porque empiezo en 0)
      //console.log(arrayNumbers[i]);
      //console.log(typeof arrayNumbers[i]);
      if (i % 2 === 0) {//Si i modulo 2,es igual a 0, significa que es su posición par
        //console.log("la posicion: " + i + " es par!!!");
        const valorDuplicado = arrayNumbers[i] * 2;//el valor de la posicion i lo multiplico por 2
        //console.log(valorDuplicado);
        //console.log(typeof valorDuplicado);
        if (valorDuplicado > 9) {//Si el valor multiplicado es mayor a 9
          const arrDuplicadoSplitted = valorDuplicado.toString().split('');
          //Hazme un nuevoArregloNumeros, que sea igual al valor duplicado en String para poderlo separar
         //console.log(valorDuplicado);
          newArrayNumbers[i] = parseInt(arrDuplicadoSplitted[0]) + parseInt(arrDuplicadoSplitted[1]);//Separar string en sus digitos
         //console.log(arrDuplicadoSplitted);
        //console.log(newArrayNumbers[i]);
        }else {
          newArrayNumbers[i] = valorDuplicado;
        }
      }
      else {//sino es posicion par, se queda igual en el newArrayNumbers
        newArrayNumbers[i] = +arrayNumbers[i];
       console.log(newArrayNumbers[i]);
      }

    }
  //console.log(newArrayNumbers[i]);
    //split().map(cardNumber)//string a array
    //return newNumberArray(str)
    //let newNumberArray;
    //for (i = 0; i < cardNumber.length; i++){//posiciones pares
    //if(i % 2 ===0) { 
    //do(i*2)//multiplicar por dos
    //while (i>9) slice [0-1] (i=0 + i=1)// mientras sea mayor a 9, divide y suma sus digitos
    //}
    //else {

    //Si son las posiciones impares, dejalos igual

    // Recorre el arreglo

    //for (let i = 0; i < arr.length; i += 2) {// el string, se convierte en array con el for, aqui solo me va a dar las posiciones pares dentro del array, lo debo correr de atras hacia adelante
    //;} // doblar los digitos dentro de las posiciones pares del array, 
    ////si el numero que arroja es igual (0,1,2,3,4,5,6,7,8,9) dejalo pasar para sumarlo
    ////que los numeros >9 dividelos en dos digitos para sumarlos




  }

};

export default validator;
