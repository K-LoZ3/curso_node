// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
// Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
// En la consola, los datos se muestran en formato hexadecimal.

// Creamos un buffer que almacena 4 bytes en memoria.
// Como un array de 4 bytes.
let buffer = Buffer.alloc(4);
console.log(buffer); // Imprimimos el buffer

// Creamos un buffer con valores.
let bufferConValores = Buffer.from([1, 2, 5, 6]);
console.log(bufferConValores); // Imprimimos el buffer

// Creamos un buffer con texto.
let buferrConTexto = Buffer.from('Hola');
console.log(buferrConTexto); // Imprimimos el buffer
console.log(buferrConTexto.toString()); // Imprimimos el valor de ese buufer (El texto).

// Util porque nos permite trabajar con los datos en su forma mas cruda.
// No hay que preocuparce por el tipo ni otras cosa.

let abc = Buffer.alloc(26);
console.log(abc); // Imprimimos el buffer vacio.

for(let i = 0; i < 26; i++) {
   // 97 es el valor de la 'a' en assi.
   // Los valores del buffer abc va desde el 'a' (97 en assi) hasta la 'z' (122 en assi).
   abc[i] = i + 97;
}

console.log(abc); // Imprimimos el buffer tal cual con los valores en hexadecimal.
console.log(abc.toString());