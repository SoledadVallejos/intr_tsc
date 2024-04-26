let mensaje: string = "Hola mundo"; // : string = 
mensaje = "pritty";

console.log(mensaje);

mensaje = "Pritty love"

/* 
Tipos de JS
*number
*string
*boolean
*null
*undefined
*object
*function

Tipos de TS
*any ( NO USARLO -> SE PASA CUALQUIER TIPO DE DATO)
*unknown
*never
*arrays
*tuplas
*Enums

Tipo inferidos detecta el tipo de dato al iniciarlo

*/


//TIPOS DE DATOD

let extintosDino: number = 76_000_000;
let dinoFav: string = "T- Rex";
let extintos: boolean = true;

// NO USAR ANY

function prittyFeliz(params: any) {
    return params
};


//TIPO ARRAY

let animales: string[] = ['gato', 'perro', 'raton'];
let nums: number[] = [1, 2, 3];
let check: boolean[] = [];
let nums2: Array<number> = []; //met alternativo para definir un arreglo

//nums.map( x => x.) // al autocompletado sugire métodos del tipo de dato

// TUPLAS
/* Una tupla es una variable que contiene un set de datos que se encuentran ordenados */

let tupla: [number, string] = [1, 'pritty feliz'];


// ENUMS
/* Tipo enumerado, una lista de constante */

// SIN ENUMS
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';

// CON ENUMS
// PascalCase ( por eso EL COMIENZO DE talla en mayuscula)
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' };

const variable1 = Talla.Grande;
console.log(variable1);


const enum LoadingState { Idle, Loading, Success, Error };

const estado = LoadingState.Success;

// OBJETOS

const objeto: {
    readonly id: number, // solo de lectura, no se puede reescribir
    nombre?: string // el ? significa opcional 
} = { id: 1 }

const objeto2: {
    id: number,
    nombre: string,
    talla: Talla //Enums
} = {
    id: 1,
    nombre: 'Pritty',
    talla: Talla.Grande
};

objeto2.id = 42;

//Reutilizacion del objeto , usar el type

type Direccion = {  // el tipado de un objeto se hace una interfaz o un tipo!!!!!!
    numero: number,
    calle: string,
    pais: string
};


type Persona = {
    id: number,
    nombre: string,
    apodo: string,
    direccion: Direccion
};

const dataCat: Persona = {
    id: 1,
    nombre: 'Pritty',
    apodo: 'rubio',
    direccion: {
        numero: 19078,
        calle: 'siempre viva',
        pais: 'argentina'
    }
};


const arr: Persona[] = []; // arreglo del objeto persona

// FUNCIONES

// function name(params:type): type

// Declaración de función con tipado explícito:
function sumar(a: number, b: number): number { // la funcion devuelve un number
    return a + b;
  }
  
  // Funciones flecha con retorno implicito (inferido por TypeScript):
  const dividir = (a: number, b: number) => a / b;
  
  // Funciones con parámetros opcionales:
  function saludar(nombre: string, edad?: number): string {
    if (edad !== undefined) {
      return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    } else {
      return `Hola, mi nombre es ${nombre}.`;
    }
  }
  
  // Funciones con parámetros por defecto:
  function saludar2(nombre: string, edad: number = 30): string {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  }
  
  // Ejemplo de uso de las funciones
  
  console.log(sumar(5, 3)); // Salida: 8
  console.log(dividir(10, 2)); // Salida: 5
  console.log(saludar("Juan")); // Salida: Hola, mi nombre es Juan.
  console.log(saludar("Pedro", 25)); // Salida: Hola, mi nombre es Pedro y tengo 25 años.
  console.log(saludar2("Ana")); // Salida: Hola, mi nombre es Ana y tengo 30 años.
  



