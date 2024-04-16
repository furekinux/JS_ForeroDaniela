let userchoice = "0"

var campers = {
    "001":{
        id: "123",
        nombre: "a",
        apellidos: "dg fbg",
        sala:"Art",
        ruta:"Java"
    },
    "002":{
        id: "456",
        nombre: "e",
        apellidos: "dvfd fdvf",
        sala: "Sput",
        ruta: "NoteDS"
    }
}

var trainers = {
    "pedro":{
        id: "123",
        name: "a",
        secname: "dg fbg",
        sala:"art"
    },
    "miguel":{
        id: "456",
        name: "e",
        secname: "dvfd fdvf",
        sala: "sput"
    }
}


console.log("%c ------Menú Principal------\n   Bienvenido usuario, seleccione una opción:\n -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:green;");
userchoice = prompt(" -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir");

if (userchoice == "1"){
    console.clear()
    console.log("%c ------Menú Camper------\n   Seleccione la acción a realizar:\n -> (1)Ver Informacion\n -> (2)Ver Notas\n -> (3)Ver grupos\n -> (4)Borrar Camper", "color:blue;");
    var rta = prompt("-> (1)Ver Informacion\n -> (2)Ver Notas\n -> (3)Ver grupos\n -> (4)Borrar Camper");
    if (rta == "1"){
        console.table(campers);
    }
        else if (rta == "2"){
        //IMPRIMIR NOTAS

        }
            else if (rta == "3"){
            //IMPRIMIR GRUPOS

                }
                    else if (rta == "4"){
                        
                        console.log("%c ------Campers Actuales------", "color: #ff0099;");
                        console.table(campers);
                        console.clear
                        var imoption = prompt("--Ingrese la identificación del camper a borrar--");
                        window.alert("Se borró exitosamente :D");

                        console.clear
                        console.log("%c ------Campers Actuales------", "color: #ff0099;");
                        delete campers[imoption]
                        console.table(campers);
                    }

    
} else {

    if (userchoice == "2"){
        console.clear()
        console.log("%c ------Menú Trainer------\n   Seleccione la acción a realizar:\n -> (1)Ver informacion\n -> (2)Asignar Sala\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:red;");
        if (rta == "1"){
            console.table(trainers);
        };
    } else {

        if (userchoice == "3"){

            console.log("%c ------Menú Registrar------\n   Seleccione la acción a realizar:\n -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:#ff0099;");
            campname = prompt("-> Nombre(s) del Camper");
            campsecname = prompt("-> Apellidos del Camper");
            campid = prompt("-> N° de identificación del camper");
            Number=userid = prompt("-> ID de camper");

            console.log("%c |-----Nuevo camper-----|", "color:#ff0099;","\n   ID          ", campid,"\n   Nombre(s)   ", campname,"\n   Apellidos   ", campsecname);
            
            let newcamp= {
                "${userid}":{
                id: campid,
                nombre: campname,
                apellidos: campsecname,
                sala:"pendiente",
                ruta:"pendiente",
                }
            }

            console.table(newcamp);

            var rta = prompt("¿Confirmar estos datos?");
            if (rta=="si"){
                campers.push(newcamp);
                console.table(campers);

            }

        } else {

            if (userchoice == "4"){

                console.log("%c ------Hasta luego------", "color:#ca9200;");

            } else {

                console.log("%c -No se entendió su solicitud :(-", "color:#aa5500;");
            
            }

        }
    }
}