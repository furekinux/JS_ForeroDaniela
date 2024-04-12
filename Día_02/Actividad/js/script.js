let userchoice = "0"

let campers = {
    "001":{
        id: "123",
        name: "a",
        secname: "dg fbg"
    },
    "002":{
        id: "456",
        name: "e",
        secname: "dvfd fdvf"
    }
}


console.log("%c ------Menú Principal------\n   Bienvenido usuario, seleccione una opción:\n -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:green;");
userchoice = prompt("-> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir");

if (userchoice == "1"){

    console.log("%c ------Menú Camper------\n   Seleccione la acción a realizar:\n -> (1)Ver Informacion\n -> (2)Ver Notas\n -> (3)Ver grupos", "color:blue;");

    
} else {

    if (userchoice == "2"){

        console.log("%c ------Menú Trainer------\n   Seleccione la acción a realizar:\n -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:red;");
        
    } else {

        if (userchoice == "3"){

            console.log("%c ------Menú Registrar------\n   Seleccione la acción a realizar:\n -> (1)Campers\n -> (2)Trainers\n -> (3)Registar nuevos campers\n -> (4)Salir", "color:#ff0099;");
            campname = prompt("-> Nombre(s) del Camper");
            campsecname = prompt("-> Apellidos del Camper");
            campid = prompt("-> N° de identificación del camper");
            console.log("%c |-----Nuevo camper-----|", "color:#ff0099;","\n   ID          ", campid,"\n   Nombre(s)   ", campname,"\n   Apellidos   ", campsecname);
            rta = prompt("¿Confirmar estos datos?");
            if (rta=="si"){

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