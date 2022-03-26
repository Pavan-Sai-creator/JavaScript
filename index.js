console.log('This is my first JS code.');

// Primitive DataTypes in JS //

let myname = 'Pavan'; // This is string literal
console.log('My name is',myname);
// let is used for variables

const numberOfWheels = 4; // This is number
console.log('A car has ',numberOfWheels,' wheels.');
// const is used for constants

let isStudent = true; // Boolean
let preferredLanguage = null; // null
let familyName = undefined; // undefined

// =======================================================================//

// Reference DataTypes include Objects, Arrays and Functions //

// Object //
let person = {
    name: 'Vamsi',
    age: 20
}
console.log('Name of person is ',person.name,' and he is ',person.age,' years old.');

// Here, person is object, name and age are properties of the object.
// Properties of the object are accessed using Dot notation.

// -----------------------------------------------------------------------//

// Arrays //
let array = ['Red','Blue'];
array[2]='Green';
array[3]=3;
console.log('The array has ',array.length-1,' colors. They are: ',array[0],',',array[1],' and ',array[2]);

// Arrays can have elements of different DataTypes and the length of array is dynamic.
// In JS array is an object and it's properties like length can be accessed using Dot notation.

// -----------------------------------------------------------------------//

// Functions //

// Function without return type:
function greet(person1,person2){
    console.log('Good morning, '+person1+' and '+person2+'!');
}
greet(myname,person.name);

// -----------------------------------------------------------------------//

// Function with return type:
function square(num){
    return num*num;
}
let anyNumber = 6;
console.log('Square of '+anyNumber+' is '+square(anyNumber)+'.');

// Nested Object with Function//

let student = {
    studentName:'Rahul',
    department:'CSE',
    marks:{
        Python:95,
        AutoCAD:78
    },

    startStudying: function(subject){
        console.log(this.studentName+' started studying '+subject+'.');
        // To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.
    }
}

console.log(student.studentName+' belongs to '+student.department+'.');
console.log('He scored '+student.marks.Python+' in Python and '+student.marks.AutoCAD+' in AutoCAD.');
student.startStudying('AutoCAD');

// -----------------------------------------------------------------------//

// Object with Constructor function //

    function car(brand_name,color,type){
        this.brand=brand_name;
        this.color=color;
        this.type=type;
        console.log('This '+color+' car belongs to '+brand_name+'.');
        console.log('It is a '+type+' car.');

        this.start=function(brand_name){
            console.log(brand_name+' is started.');
        }
        this.start(this.brand);
    }

let car1 = new car('Audi','black','sports');
let car2 = new car('Rolls Royace','white','luxury');

/* You can have the same properties as the constructor function or 
add a new property to one particular object. For example, */

car2.expensive=true;

car2.openTop=function(){console.log(car2.brand+' opened the roof.');}
car2.openTop();
console.log('Is '+car2.brand+' expensive? '+car2.expensive+'.');

// =======================================================================//

// Getter and Setter //

let employee = {
    // data property
    firstName: 'Monica',
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
    set changeName(newName) {
        this.firstName = newName;
    }
    // Note: Setter must have exactly one formal parameter.
}
// accessing data property
console.log('Employee name is '+employee.firstName); // Monica
// accessing getter methods
console.log('Employee name is '+employee.getName); // Monica

// trying to access as a method
// console.log(employee.getName()); // error

employee.changeName = 'Sarah';
console.log('Employee name is '+employee.firstName); // Sarah

// =======================================================================//

// Arrow Function //

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log('sum of 5 and 7 is '+result1); // 12

// You should not use arrow functions to create methods inside objects.
// You cannot use an arrow function as a constructor

//-------------------------------------------------------------------------//

// JS Classes //

class vehicle{
    constructor(type){
        this.type=type;
    }
    describe(){
        console.log('It is a '+this.type);
    }
}

let vehicle1 = new vehicle('Bike');
vehicle1.describe();

// Inheritance //

class animal{
    constructor(animalType){
        this.animalType=animalType;
        console.log('I am a '+this.animalType);
    }
}

class dog extends animal{
    constructor(sound){
        super('Dog'); // Calling constructor of parent class
        this.sound=sound;
    }

    bark(){
        console.log('I bark '+this.sound);
    }
}

let charlie = new dog('bow bow');
charlie.bark();

// map function of arrays //

numbers = [1,2,3];
console.log('Numbers: '+numbers);
const modifiedNumbers = numbers.map((number)=>{return number*2});
console.log('Modified numbers: '+modifiedNumbers);

// filter function of arrays //

ages = [10,15,20,24];
youngAges = ages.filter((age)=>age<18);
console.log('Ages: '+ages);
console.log('Young ages: '+youngAges);