//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model, manufacturer, year, maxspeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;

//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function drive (){
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    }

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function info (){
        for (const argument in this) {
            if (typeof this[argument] === 'function'){
                continue;
            }
            console.log(argument,'-', this[argument])
        }
    }

//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
        this.maxspeed += newSpeed;
    }

//-- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function changeYear (newValue){
        this.year = newValue;
    }

//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
   this.addDriver = function addDriver (driver){
        this.driver = driver;
   }
}

let car = new Car('punto', 'fiat', 2011, 150, 1.2)
car.drive()
car.info()
car.increaseMaxSpeed(25)
car.changeYear(2015)
car.addDriver({name: 'Ivan', id_drive_class: 'B', insurance: true})
car.info()


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor (model, manufacturer, year, maxspeed, volume) {
     this.model = model;
     this.manufacturer = manufacturer;
     this.year = year;
     this.maxspeed = maxspeed;
     this.volume = volume;
    }
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info (){
        for (const argument in this) {
            console.log(argument,'-', this[argument])
        }
    }

//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed){
        this.maxspeed += newSpeed;
    }

//-- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newValue){
        this.year = newValue;
    }

//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver (driver){
        this.driver = driver;
    }

}

function Driver (name, id_drive_class, insurance) {
    this.name = name;
    this.id_drive_class = id_drive_class;
    this.insurance = insurance;
}

let car2 = new Car2('sonata', 'hundai', 2016, 185, 1.6)

car2.drive()
car2.info()
car2.increaseMaxSpeed(25)
car2.changeYear(2018)
let driver = new Driver('Maks', 'B, C', true)
car2.addDriver(driver)
car2.info()

