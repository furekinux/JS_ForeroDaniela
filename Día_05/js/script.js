function Board(tablero){
    tabtam= tablero.keys;
    for(const[key,value] of Object.entries(tablero)){ /*OBJECT ENTRIES DA LLAVE Y EL VAL */
        line= "\n  "+value.join("  ")
        console.log(`%c${line}`,"font-size: 17.2px; padding:0px; margin:0px")
    }
}
function printboard(texto){
    console.log(`%c■     ${texto}     ■`,
    "color: #ffffff; font-size: 17.3px; background-color: #000000; padding-top:5px; margin-top:5px;")
    Board(tablero)
    console.log("%c\n■                        ■",
    "color: #ffffff; font-size: 17.3px; background-color: #000000; padding-top:3px; padding-bottom:3px;")
}
const tablero= {
    "line8": ["□","■","□","■","□","■","□","■"],
    "line7": ["■","□","■","□","■","□","■","□"],
    "line6": ["□","■","□","■","□","■","□","■"],
    "line5": ["■","□","■","□","■","□","■","□"],
    "line4": ["□","■","□","■","□","■","□","■"],
    "line3": ["■","□","■","□","■","□","■","□"],
    "line2": ["□","■","□","■","□","■","□","■"],
    "line1": ["■","□","■","□","■","□","■","□"],
}

taman_tablero=Object.keys(tablero).length
printboard("UBICA LA REINA")
console.log(taman_tablero)

let lines_amount = prompt("□ Ingrese la cantidad de filas y columnas ■")
linin=lines_amount.split(" ").map(Number) //MAP <3

let locate = prompt("♛ Ingrese la ubicación de la reina ♛")
coordin=locate.split(" ").map(Number) //MAP <3

taman_coor=coordin.length

console.clear()

if (taman_coor==2){
    if((Number=!coordin[0]) || (Number=!coordin[1])){
    console.log("No se reconocieron estas coordenadas :(")
    }
    else if((0>coordin[0], coordin[0]>taman_tablero) || (0>coordin[1], coordin[1]>taman_tablero)){
    console.log("No se reconocieron estas coordenadas :(")

    }
    else{
        for(const[key,value] of Object.entries(tablero)){
            linewhere="line"+coordin[1]
            if(key==linewhere){
                
                value.splice(coordin[0]-1,1,"♛")
                
                printboard(" REINA UBICADA")
            }
        }
    }
} else {
    console.log("No se reconocieron estas coordenadas")
}
