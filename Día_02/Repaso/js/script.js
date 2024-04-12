//PUSH AGREGA ELEMENTOS AL FINAL DEL ARRAY Array.prototype.push()
console.log("\n---PUSH AGREGA ELEMENTOS AL FINAL DEL ARRAY---");

let fruits = []
console.log(fruits);

fruits.push("adios","olá","hallo");
console.log(fruits);
console.log("Tamaño: ",fruits.length);
fruits.forEach((item,index)=>{
    console.log("Item",item,"indice",index);
})

console.log("\n---AGREGAR ELEMENTOS DE UN PROMPT---");
agregar=prompt("Ingrese una palabra");
console.log("Input",agregar);
fruits.push(agregar);
console.log(fruits);


//Object.keys MUESTRA LAS IDS EN ORDEN DE LOS ELEMENTOS DE ArRAY
console.log("\n---Object.keys MUESTRA LA UBICACION DE LOS ELLEMENTOS---")
console.log(Object.keys(fruits));


//POP ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Array.prototype.pop()
console.log("\n---POP ELIMINA EL ULTIMO ELEMENTO DEL ARRAY---");
fruits.pop();
console.log(fruits);

//POP ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Array.prototype.pop()
fruits.forEach((item,index)=>{
    console/**/.log("Item",item,"indice",index);
});

//SPLICE PARA CRUD
console.log("\n---SPLICE ELIMINA Y REEMPLAZA ELEMENTOS EN UN ARRAY---");
const vegetables = [1,2,4,6,9];
vegetables.splice(2,1,7,4,6,7,4,3);
console.log("\n-Estructura: splice(index del item, cuantos items a borrar, item1... item4)-");
console.log(vegetables);

//CABEZA Y COLA DE UN ARRAY
//---Cabeza(HEAD): Primer item del array, si está VACÍO la cabeza es undefined
//---Cola(TAIL): Los items después de la cabeza, si está vacío será el
//---array en blanco "[]"
