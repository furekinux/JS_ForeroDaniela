function Board(tablero){
    tabtam= tablero.keys;
    for(const[key,value] of Object.entries(tablero)){ /*OBJECT ENTRIES DA LLAVE Y EL VAL */
        line= "\n  "+value.join("  ")
        console.log(`%c${line}`,"color: #ffffff; font-size: 17.2px")
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

printboard("UBICA LA REINA")

let locate = prompt("♛ Ingrese la ubicación de la reina ♛")
coordin=locate.split(" ").map(Number) //MAP <3
console.log(coordin)
taman_coor=coordin.length

console.clear()

if (taman_coor==2){
    if((Number=!coordin[0]) || (Number=!coordin[1])){
    console.log("No se reconocieron estas coordenadas :(")
    }
    else if((0>coordin[0], coordin[0]>8) || (0>coordin[1], coordin[1]>8)){
    console.log("No se reconocieron estas coordenadas :(")

    }
    else{
        for(const[key,value] of Object.entries(tablero)){
            linewhere="line"+coordin[0]
            if(key==linewhere){
                
                value.splice(coordin[1]-1,1,"♛")
                
                printboard(" REINA UBICADA")
            }
        }
    }
} else {
    console.log("No se reconocieron estas coordenadas")
}
