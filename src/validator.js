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
    let sumaTotal = 0;//sumar todos los digitos de mi nuevo arreglo
    sumaTotal= newArrayNumbers.reduce(function (a,b) {
      return a + b;
    });
    //console.log(sumaTotal); 
   const isZero= sumaTotal.toString().endsWith('0');
   if (isZero === true) {
    console.log("Es valida tu tarjeta");
   } else {
    console.log("Es Invalida tu tarjeta");
    
   }
  
  }

};

export default validator;
