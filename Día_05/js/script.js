function Board(tablero){
    tabtam= tablero.length
    imprimir= tablero.join(" ")
    for(let i=0 ; i<tabtam ; i++){
        console.log("a",imprimir,"\n")
    }

}
tablero=["O","O","O","O","O","O","O","O"]
Board(tablero)