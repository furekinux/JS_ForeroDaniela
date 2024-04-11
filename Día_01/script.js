//#######################################################
//                  -EJERCICIO DÍA #01-

//              DANIELA FORERO BALLÉN (P1)
//#######################################################

let a=3
const b=2
var c="HI"
console.log((a+b)/2);
console.log("Holiwis",c);


let d=true
e=false
console.log("True y False:", d&&e, "\nTrue o False:", d||e);

if (d!=true){
    var arroz="Holaaaaa"
    console.log(arroz)
}
else{
    console.log(":(")
}

//================FUNCIONES====================

//SIN PARAMETROS y SIN RETORNO
function funcionNormal(){
    console.log("Hola soy una función :D")
}
funcionNormal()


//CON PARAMETROS y SIN RETORNO
function suma(a,b){
    console.log("Hola soy otra función :D")
    console.log(a+b+1)
}
suma(a,b)


//CON PARAMETROS y CON RETORNO
function susuma(a,b){
    return (a+b+5)
}
console.log(susuma(a,b))


//SIN PARAMETROS y CON RETORNO
function salonjiji(){
    return "P1"
}
console.log(salonjiji())

//==============================================


//===================Bucles=====================

arreglito=["Tengo sueño",43,false]

tamanioo=arreglito.length

for (let i=0; i<tamanioo; i=i+1){
    console.log(arreglito[i])
}
//==============================================



//==============================================

//JIJIJIJIJIJIJIJIJIJIJI