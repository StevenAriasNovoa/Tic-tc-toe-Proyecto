/**Dada la siguiente matriz realiza los ejercicios citados*/



let matrisCeldas = [
    ["c-00", "c-01", "c-02"],
    ["c-10", "c-11", "c-12"],
    ["c-20", "c-21", "c-22"]
];
console.log(matrisCeldas [0][1])
console.log(matrisCeldas[0][2])

for (let listaGande = 0; listaGande < matrisCeldas.lengh -1 ;listaGande++) {
    const element = matrisCeldas [listaGande];
var elementoColumna = element[0]; 
console.log(elementoColumna);
}


for (let index = 0; index < matrisCeldas (0).lengh;index++){
    console.log(matrisCeldas(0)[index]);
}


for (let indiceFilas = 0; indiceFilas < matrisCeldas[indiceFilas].length; indiceFilas++) {
    console.log(matrisCeldas(indiceFilas));
    for (let indiciColum =0 ; indiciColum < matrisCeldas(indiceFilas).lengh; indiceFilas++) {
        console.log(matrisCeldas[indiceFilas[indiciColum]])
    }
}

console.log(matrisCeldas [0]) = [0,2]


const matrisObjetos = [
    ['Manzana', 'Plátano', 'Naranja'],
    ['Perro', 'Gato', 'Pájaro'],
    ['Mesa', 'Silla', 'Lámpara']
];




console.log(` 1.1) Imprime en consola el Objeto en la fila 1 y columna 1; `);
console.log(matrisObjetos[1][1])
// Resultado esperado//   Gato


console.log(`2.2) Imprime en consola el Objeto en la fila 2 y columna 2; `);
console.log(matrisObjetos[2][2])
// Resultado esperado//   Lámpara


console.log(`0.0) Imprime en consola el Objeto en la fila 0 y columna 0; `);
console.log(matrisObjetos[0][0])

console.log(`1.0) Imprime en consola el Objeto en la fila 2 y columna 1; `);
console.log(matrisObjetos[2][1])

console.log(`o. 2) Completa el siguiente llamado consola con la fila  y columna  del objeto  "Naranja" ; `);
console.log(matrisObjetos[0][2])

let filaNaranja =2 /** tu codigo aqui */;

console.log(matrisObjetos[0])

let columnaNaranja =2/** tu codigo aqui */;
for (let index = 0; index < matrisObjetos.length; index++) {
    console.log(matrisObjetos[index][2]);
}

//ejemplo;
let filaGato = 1;

console.log(matrisObjetos [1])

let columnaGato = 1;

console.log(matrisObjetos [0])


console.log(`La naranja esta en la posicion: fila ${filaNaranja} y la columna ${columnaNaranja}`);

for (let index = 0; index < matrisObjetos.length; index++) {
    console.log(matrisObjetos[index][2]);
    console.log(matrisObjetos[0][index])
    
}

console.log(`3) Completa el siguiente llamado consola con la fila  y columna  del objeto  "Mesa" ;`);

for (let index = 0; index < matrisObjetos.length; index++) {
    console.log(matrisObjetos[index][0]);
    console.log(matrisObjetos[2][index])
}


let filaMesa =0 /** tu codigo aqui */;
console.log(matrisObjetos[2])

let columnaMesa =0/** tu codigo aqui */;

console.log(`La mesa esta en la posicion: fila ${filaMesa} y la columna ${columnaMesa}`);

console.log(`4) Utiliza un ciclo for para imprimir los elementos de la fila numero #2  ;`);
// Resultado esperado//    'Mesa',
//                         'Silla'
//                         'Lámpara'

for (let index = 0; index < matrisObjetos.length; index++) {
    console.log(matrisObjetos[2][index]);
}

