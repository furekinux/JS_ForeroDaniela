//1.Write a JavaScript program to create a class called "Person"
//with properties for name, age and country.
//Include a method to display the person's details. Create two
//instances of the 'Person' class and display their details.
function CreatePerson(){

    function Person(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    };

    const Mark=new Person("Mark",19,"Brazil");
    console.log(Mark)
    console.table(Mark)
    console.log("%c\n   Mark instanceof Person:","font-size:14px;color: red",Mark instanceof Person)

    const Sally=new Person("Sally",40,"India");
    console.log("\n\n",Sally)
    console.table(Sally)
    console.log("%c\n   Sally instanceof Person:","font-size:14px;color: red",Sally instanceof Person)
}
console.log("%c               Exercise #1\n","font-size:14px;color: red")
CreatePerson()

//2. Write a JavaScript program to create a class called 'Rectangle'
//with properties for width and height. Include two methods to calculate
//rectangle area and perimeter. Create an instance of the 'Rectangle'
//class and calculate its area and perimeter.
function CreateRectangle(){
    function Rectangle(width,height){
        this.width=width;
        this.height=height;
        this.area= function (width,height){
            return width*height
        };
        this.perimeter= function (width,height){
            return (width*2)+(height*2)
        }
    };
    const FirstRec = new Rectangle(10,9)
    console.log(FirstRec)
    console.table(FirstRec)
    console.log("Área del rectángulo FirstRec:",FirstRec.area(FirstRec.width,FirstRec.height))
    console.log("Perímetro del rectángulo FirstRec:",FirstRec.perimeter(FirstRec.width,FirstRec.height))
    console.log("%c\n   FirstRec instanceof Rectangle:","font-size:14px;color:blue",FirstRec instanceof Rectangle)

}
console.log("%c\n\n\n               Exercise #2\n","font-size:14px;color: Blue")
CreateRectangle()

//3. Write a JavaScript program that creates a class called 'Vehicle'
//with properties for make, model, and year. Include a method to display
//vehicle details. Create a subclass called 'Car' that inherits from the
//'Vehicle' class and includes an additional property for the number of
//doors. Override the display method to include the number of doors.
function CreateVehicle(){
    function Vehicle(make,model,year,doors){
        this.make=make;
        this.model=model;
        this.year=year;
        this.Car={
            doors:doors
        }
    };
    const Toyota = new Vehicle("Toyota","Toyota Avalon",2000,4)
    console.log(Toyota)
    console.table(Toyota)
    console.log("Toyota.Car",Toyota.Car)

    console.log("%c\n   Toyota instanceof Vehicle:","font-size:14px;color: purple",Toyota instanceof Vehicle)

}
console.log("%c\n\n\n               Exercise #3\n","font-size:14px;color: purple")
CreateVehicle()

//4. Write a JavaScript program that creates a class called "BankAccount" with properties for  
//account number and balance. Include methods to deposit and withdraw money from the account. Create some 
//instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
function CreateBankAcc(){
    function BankAccount(accnumber,balance){
        this.accnumber=accnumber;
        this.balance=balance;
        this.withdraw= function(balance,withdraw){
            return BankAccount.balance=balance-withdraw
        }
        this.deposit= function(balance,deposit){
            return BankAccount.balance=balance+deposit
        }
    };
    const MyAcc = new BankAccount(1423,10000000)
    console.log(MyAcc)
    console.table(MyAcc)
    console.log("%c\n\nWithdraw from MyAcc -$10:","font-size:15px",MyAcc.withdraw(MyAcc.balance,10))
    MyAcc.balance=MyAcc.withdraw(MyAcc.balance,10)
    console.table(MyAcc)

    console.log("%c\n\nDeposit to MyAcc +$190:","font-size:15px",MyAcc.deposit(MyAcc.balance,190))
    MyAcc.balance=MyAcc.deposit(MyAcc.balance,190)
    console.table(MyAcc)

    console.log("%c\n   MyAcc instanceof Vehicle:","font-size:14px;color: Red",MyAcc instanceof BankAccount)
}
console.log("%c\n\n\n               Exercise #4\n","font-size:14px;color: red")
CreateBankAcc()

//5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the 
//area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and 
//override the area calculation method. Create an instance of the 'Circle' class and calculate its 
//area. Similarly, do the same for the 'Triangle' class.
function CreateShape(){
    function Shape(circle,triangle){
        this. Circle=circle
        this. Triangle=triangle
    }
    function Circle(radius){
        this.radius=radius
        this.method= function area(radius){
            area_is=3.14*(radius*radius)
            return area_is
        }
    }
    function Triangle(base,height){
        this.base=base
        this.height=height
        this.method= function area(base,height){
            area_is=(base*height)/2
            return area_is
        }
    }

    const Triangle1 = new Triangle(4,7)
    const Circle1 = new Circle(4)
    const MyShapes = new Shape(Circle1,Triangle1)
//-------------------------------------------
    console.log(MyShapes)
    console.table(MyShapes)
//-------------------------------------------
    console.log("\n\n",Circle1)
    console.table(Circle1)
    console.log("Circle1 area:",Circle1.method(Circle1.radius))
//-------------------------------------------
    console.log("\n\n",Triangle1)
    console.table(Triangle1)
    console.log("Triangle area:",Triangle1.method(Triangle1.base,Triangle1.height))
//-------------------------------------------
    console.log("%c\n   Triangle1 instanceof Triangle:","font-size:14px;color: Green",Triangle1 instanceof Triangle)
    console.log("%c\n   Circle1 instanceof Triangle:","font-size:14px;color: Green",Circle1 instanceof Circle)

    console.log("%c\n   MyShapes instanceof Shape:","font-size:14px;color: Green",MyShapes instanceof Shape)
}
console.log("%c\n\n\n               Exercise #5\n","font-size:14px;color: green")
CreateShape()

//6. Write a small JavaScript program that demonstrates constructor chaining using a hierarchy of 
//three classes as follows: A is the parent of B which is the parent of C. Modify your definition of 
//A so that it has exactly one constructor that takes an argument, and show how B and/or C must be 
//changed to work with it.
function CreateConstructorChain(){
    function Chain(A,message){
        this.Parent=A
        this.message=message
    }
    function A(Child,message){
        this.Child=Child
        this.message=message
    }
    function B(Child,message){
        this.Child=Child
        this.message=message
    }
    function C(Child,message){
        this.Child=Child
        this.message=message
    }

    const FunC = new C(NaN,NaN)
    const FunB = new B(NaN,NaN)
    const FunA = new A(NaN,NaN)
    const MyChain = new Chain(FunA,"Hello World")

    FunA.Child=FunB
    FunA.message=MyChain.message
    FunB.Child=FunC
    FunB.message=MyChain.message
    FunC.message=MyChain.message

    console.log("Chain:",MyChain)
    console.table(MyChain)

    console.log("\n\nParent of B:",MyChain.Parent)
    console.table(MyChain.Parent)
    console.log("\n\nParent of C:",MyChain.Parent.Child)
    console.table(MyChain.Parent.Child)
    console.log("\n\nChild C:",MyChain.Parent.Child.Child)
    console.table(MyChain.Parent.Child.Child)
}
console.log("%c\n\n\n               Exercise #6\n","font-size:14px;color: blue")
CreateConstructorChain()

//7.  A Computer Science department keeps track of its CS students using some custom software. Each
//student is represented by a ""Student"" object that features a pass() method that returns true if and
//only if the student has all six ticks(notas) to pass the year. The department suddenly starts teaching NS 
//students, who only need four ticks to pass. Using inheritance and polymorphism, show how the 
//software can continue to keep all Student objects in one list in code without having to change any 
//classes other than Student.

//NOTAS *4
//PASS= Ecuación para promedio de notas + Notas pendientes(si las hay)
function StudentTrack(){
    function CSstudents(St_ID){
        this.method= function pass(St_ID){
            waiting=[]
            sum=0
            for(const[key,val] of Object.entries(St_ID.ticks)){
                
                if(val==undefined){
                    waiting.push(key)
                }else{
                    sum=sum+val
                }
                
            }
            tam_wait=waiting.length
            if(tam_wait>0){
                console.log("%c\n > Student ID","color: purple", St_ID.info.ID,"you have ticks left:")

                for(item in waiting){
                    console.log(" >",waiting[item],"\n")
                }
                console.log("%c\n You failed :(","color: red")
                
            } else{
                prom=sum/4
                console.log("%c\n > Student ID","color: purple", St_ID.info.ID, "your % of the year is:",prom)
                if (prom>72){
                    console.log("%c\n You passed :D","color: green")
                } else{
                    console.log("%c\n You failed","color: red")

                }
            }
        }

        this.Students={
            ID_1:St_ID}
    }
    function StudentID(ID,tick_1,tick_2,tick_3,tick_4){
        this.info={
            ID:ID
        }
        this.ticks={
            tick_1:tick_1,
            tick_2:tick_2,
            tick_3:tick_3,
            tick_4:tick_4,
        }
    }

    function Student_List(){
        console.log(`\nStudents List` )
        for(const[key,val] of Object.entries(CSD.Students)){
            console.log(`\nStudent ${key}   ID_Num:${val.info.ID}`);
            console.table(val.ticks)
        }
    }

    const St_114 = new StudentID(114,100,90,80,100)
    const St_134 = new StudentID(134,100,undefined,80,100)

    const CSD = new CSstudents(St_114)
    console.log(St_114)
    console.log(St_134)

    CSD.Students.ID_2=St_134
    console.log(CSD)
    console.table(CSD)

    Student_List()

    console.log(CSD.method(St_114))

}


console.log("%c\n\n\n               Exercise #7\n","font-size:14px;color: purple")
StudentTrack()
