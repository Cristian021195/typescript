//UNIONES, tanto en variables como en parametros de funciones, puede usarse en el caso de apis cuando se espera una respuesta
let multi_tipo: number | undefined;
multi_tipo = 3; //ok
multi_tipo = undefined; //ok
//multi_tipo = 'asd'; //no

function suma(num1:number | string, num2: number | string){
    if(typeof num1 === 'number' && typeof num2 === 'number'){ return num1 + num2 }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){ return num1 +', '+ num2 }
    //throw new Error("Los tipos num1 y num2 no coinciden");    
}

console.log(suma(2,4));
console.log(suma('hola','mundo'));
console.log(suma('hola',2)); //daria error


//INTERSECCIONES
/*  notar que la interfaz solo nos ayuda en tiempo de compilacion para evitar estos errores, al momento de ejecutar vemos las variables como simples objetos*/
interface Direccion {
    altura:number,
    ciudad:string,
}
interface Empleado {
    id:number,
    edad:number,
    direccion:Direccion,
    estado_social:object
}
interface Supervisor{
    plan:string
}

type EmpleadoSupervisor = Empleado & Supervisor; //creamos el tipo de interseccion

const luis: EmpleadoSupervisor = {
    id:123,
    edad:22,
    plan:'Jefe catedra',
    direccion: {
        altura:123,
        ciudad:'estela'
    },
    estado_social:{}    
}
const cristian: Empleado = {
    id:123,
    edad:22,
    direccion: {
        altura:123,
        ciudad:'estela'
    },
    estado_social:{}
    //plan:'Jefe catedra' //aqui nos daria error
}

const matias: Empleado = {
    id:123,
    edad:22,
    direccion: {
        altura:123,
        ciudad:'estela'
    },
    estado_social:{}
    //plan:'Jefe catedra' //aqui nos daria error
}