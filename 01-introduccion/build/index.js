"use strict";
let x;
x = 456;
let y = 'asdas';
let z;
z = 123;
z = 'asd'; //esto nos permite porque implicitamente es de tipo :any
let vacio;
let pregunta;
pregunta = true;
let nulo;
let sin_definir;
var Tipos;
(function (Tipos) {
    Tipos[Tipos["Principal"] = 1] = "Principal";
    Tipos[Tipos["Secundario"] = 2] = "Secundario";
    Tipos[Tipos["Terciario"] = 3] = "Terciario";
})(Tipos || (Tipos = {}));
let variable_desconocida = 10;
variable_desconocida = true;
variable_desconocida = 'asd';
//variable_desconocida.name; //a diferencia de :any o implicito nos bloquea la compilacion o nos advierte
//ASERCIONES
/* en este caso ya estamos seguros que nuestra variable_desconcocida sera string, por ende podemos usar los metodos correspondientes.*/
variable_desconocida.toLowerCase(); //forma 1
variable_desconocida.toLowerCase(); //forma 2
if (typeof variable_desconocida === 'string') {
    variable_desconocida.toLowerCase(); //ts detecta la comprobacion de variable. no es necesaria la asercion de paso tenemos validacion en ejecucion
}
//INTERSECCIONES, tanto en variables como en parametros de funciones, puede usarse en el caso de apis cuando se espera una respuesta
let multi_tipo;
multi_tipo = 3; //ok
multi_tipo = undefined; //ok
//multi_tipo = 'asd'; //no
function suma(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ', ' + num2;
    }
    //throw new Error("Los tipos num1 y num2 no coinciden");    
}
console.log(suma(2, 4));
console.log(suma('hola', 'mundo'));
console.log(suma('hola', 2)); //daria error
function saludo(nombre) {
    return `Hola ${nombre}`;
}
let consumidor_tipos = 1;
console.log(saludo(`cristian, enum por nombre: ${Tipos.Principal}, enum por numero n: ${Tipos[consumidor_tipos]}`));
