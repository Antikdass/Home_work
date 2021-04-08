// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


function Car(model, producer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км`)
    }
    this.info = function () {
        console.log(`Model: ${this.model}, Producer: ${this.producer}, GraduationYear: ${this.graduationYear}, Max speed: ${this.maxSpeed}, Engine capacity: ${this.engineCapacity}`)
    }
    this.increaseMaxSpeed = function () {
        this.maxSpeed += 50;
    }
    this.changeYear = function () {
        this.graduationYear = 2010;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let firstCar = new Car('M5', 'BMW', 2006, 230, 6);
console.log(firstCar)
firstCar.drive();
firstCar.info();
firstCar.increaseMaxSpeed();
firstCar.info();
firstCar.changeYear();
firstCar.info();
firstCar.addDriver({
    name: 'Vitas',
    yearsOld: 25
})




// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CarCar {
    constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км`)
    }
    info() {
        console.log(`Model: ${this.model}, Producer: ${this.producer}, GraduationYear: ${this.graduationYear}, Max speed: ${this.maxSpeed}, Engine capacity: ${this.engineCapacity}`)
    }
    increaseMaxSpeed() {
        this.maxSpeed += 50;
    }
    changeYear() {
        this.graduationYear = 2010;
    }
    addDriver(driver) {
        this.driver = driver;
    }



}
console.log('--------------------------------')
let carTwo = new CarCar('M5', 'BMW', 2006, 230, 6)
carTwo.drive();
carTwo.info();
carTwo.increaseMaxSpeed()
carTwo.changeYear();
carTwo.addDriver({
    name: 'Petro',
    yearsOld: '50'
})
carTwo.info()







// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
console.log('================================================================')
class Popilyshka {
    name = 'Ivanka';
    yearsOld = 18;
    footSize = 38;

}
const pop = new Popilyshka();
pop.name = 'Dina'
pop.yearsOld = 23;
pop.footSize = 46;
const pop1 = new Popilyshka();
pop1.name = 'Irina'
pop1.yearsOld = 20;
pop1.footSize = 28;
const pop2 = new Popilyshka();
pop2.name = 'Izida'
pop2.yearsOld = 32;
pop2.footSize = 42;
const pop3 = new Popilyshka();
pop3.name = 'Mare'
pop3.yearsOld = 14;
pop3.footSize = 32;
const pop4 = new Popilyshka();
pop4.name = 'Anna'
pop4.yearsOld = 92;
pop4.footSize = 56;
const pop5 = new Popilyshka();
pop5.name = 'Kalyna'
pop5.yearsOld = 44;
pop5.footSize = 45;
const pop6 = new Popilyshka();
pop6.name = 'Sophia'
pop6.yearsOld = 15;
pop6.footSize = 28;
const pop7 = new Popilyshka();
pop7.name = 'Tonya'
pop7.yearsOld = 2;
pop7.footSize = 14;
const pop8 = new Popilyshka();
pop8.name = 'Kamara'
pop8.yearsOld = 154;
pop8.footSize = 12;
const pop9 = new Popilyshka();
pop9.name = 'Kaha'
pop9.yearsOld = 54;
pop9.footSize = 41;
let array = [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9]

class prince {
    name = 'Ruslan';
    yearsOld = 24;
    slipper = 56;
}
let pr = new prince();
for (let popel of array) {
    if (pr.slipper === popel.footSize) {
        console.log(popel);
    }
}




// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Popelush(name, yearsOld, footSize) {
    this.name = name;
    this.yearsOld = yearsOld;
    this.footSize = footSize;
}
let pope = new Popelush('Diana', 12, 36);
let pope2 = new Popelush('Runa', 15, 32);
let pope3 = new Popelush('Ulyana', 19, 35);
let pope4 = new Popelush('Milana', 44, 31);
let pope5 = new Popelush('Lina', 90, 42);
let pope6 = new Popelush('Kana', 64, 37);
let pope7 = new Popelush('Lana', 54, 41);
let pope8 = new Popelush('Duna', 6, 27);
let pope9 = new Popelush('Rita', 19, 43);
let popArray = [pope, pope2, pope3, pope4, pope5, pope6, pope7, pope8, pope9]

let princce = {
    name: 'Dimas',
    yearsOld: 30,
    slipper: 35,
}

function lipperSearch() {
    for (let popell of popArray) {
        if (princce.slipper === popell.footSize) {
            console.log(popell);
        }
    }
}
lipperSearch();