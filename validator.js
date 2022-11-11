const validator = {
  isValid: function (cardNumber) { //declaro la funcion
    cardNumber = cardNumber.replace(/\s+/g, '');//reemplazar los espacios en blanco en ''
   //console.log(cardNumber);
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
       //console.log(newArrayNumbers[i]);
      }
    }
    let sumaTotal = 0;//sumar todos los digitos de mi nuevo arreglo
    sumaTotal= newArrayNumbers.reduce(function (a,b) {
      return a + b;
    });
    console.log(sumaTotal); 
   const isZero= sumaTotal.toString().endsWith('0'); // si en la suma total, en el string el ultimo valor es 0
   if (isZero === true) {// si es true mi tarjeta es valida ya que cumple con el algoritmo
    console.log("Es valida tu tarjeta");
    return true;
   } else {//si no es 0, es falso y mi tarjeta es invalida
    console.log("Es Invalida tu tarjeta");
    return false;
   }
  
  },
maskify: function maskify(cardNumber) {//Mi funcion maskify va a actuar sobre el cardNumber, que es el dato que ingresa el usuario
    var x = cardNumber.length;
    var output = "";
    for(var i = 0; i< x - 4;i++)//Se crea un for para que cada posicion menos 4
      {
        output += "#";//se cambie por un #
      }
     return output + cardNumber.substring(x-4,x); //cuando retorna termina la ejecucion de mi funcion
    
  }
};


export default validator;
