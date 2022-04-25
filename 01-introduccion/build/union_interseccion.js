//UNIONES, tanto en variables como en parametros de funciones, puede usarse en el caso de apis cuando se espera una respuesta
var multi_tipo;
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
var luis = {
    id: 123,
    edad: 22,
    plan: 'Jefe catedra'
};
var cristian = {
    id: 123,
    edad: 22
};
