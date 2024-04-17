console.log("%c\n\n---Crear Personas---","color: #ff0099")

function Person(name,age,gender,eyecolor){
    this.name=name
    this.age=age
    this.gender=gender
    this.eyecolor=eyecolor
};

const Alan = new Person("Alan Brito Delgado",99,"M","Brown");
const Elsa = new Person("Elsa Pato Anda",-67,"F","Blue");
console.log(Alan)
console.log(Elsa)


//--------------------------------------------------------


console.log("%c\n\n---Crear Carros---","color: #7cca92")

function Car(make,model,year,owner){
    this.make=make
    this.model=model
    this.year=year
    this.owner=owner
};

const Carrito1 = new Car("No sé","No sé de carros",9999,Alan);
console.log(Carrito1)

console.log("%c\nDueñ@ del carro:","color: #9fcd70",Carrito1.owner.name)


//--------------------------------------------------------


console.log("%c\n\n---Crear Libro---","color: #ffff00")

function Book(title,author,gender,year){
    this.title=title
    this.author=author
    this.gender=gender
    this.year=year

};
const Clown = new Book("La divina comedia",Alan,"Horror",1990);
console.log(Clown)


//--------------------------------------------------------


console.log("%c\n\n---Crear/Asignar keys + val---","color: #10aacc")

Carrito1.color="pan.";
Carrito1.horario="no";

Carrito1.owner=Elsa;
console.log(Carrito1)
console.log("%c\nDueñ@ del carro:","color: #9fcdda",Carrito1.owner.name)


//--------------------------------------------------------


console.log("%c\n\n---Borrar keys + val---","color: #ff0000")
delete Carrito1.horario
delete Carrito1.color

console.log(Carrito1)
console.log("%c\nColor del carro:","color: #ff89cc",Carrito1.color, "ya no existe :D")


//--------------------------------------------------------

function showProps(Car,Carrito1){

}