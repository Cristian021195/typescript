let x:number;
x = 456;
let y:string = 'asdas';

let z;
z = 123; z='asd'; //esto nos permite porque implicitamente es de tipo :any

let vacio:void;

let pregunta:boolean;
pregunta = true;

let nulo:null;

let a:object;
a = {};
//a = 3; aqui nos daria error

let sin_definir:undefined;

enum Tipos {
    Principal = 1,
    Secundario = 2,
    Terciario = 3
}

let variable_desconocida :unknown = 10;
variable_desconocida = true;
variable_desconocida = 'asd';
//variable_desconocida.name; //a diferencia de :any o implicito nos bloquea la compilacion o nos advierte

//ASERCIONES
/* en este caso ya estamos seguros que nuestra variable_desconcocida sera string, por ende podemos usar los metodos correspondientes.*/
(variable_desconocida as string).toLowerCase(); //forma 1
(<string>variable_desconocida).toLowerCase(); //forma 2

if(typeof variable_desconocida === 'string'){
    variable_desconocida.toLowerCase();//ts detecta la comprobacion de variable. no es necesaria la asercion de paso tenemos validacion en ejecucion
}

function saludo(nombre:string){
    return `Hola ${nombre}`
}

let consumidor_tipos:Tipos = 1;

console.log(saludo(`cristian, enum por nombre: ${Tipos.Principal}, enum por numero n: ${Tipos[consumidor_tipos]}`))