//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name, year, foot_size){
    this.name = name;
    this.year = year;
    this.foot_size = foot_size;
}

let cinderellas = [
    new Cinderella('Anna', 1984, 33),
    new Cinderella('Lena', 1983, 34),
    new Cinderella('Olya', 1987, 31),
    new Cinderella('Sveta', 1988, 33),
    new Cinderella('Valya', 1982, 34),
    new Cinderella('Katya', 1984, 36),
    new Cinderella('Nastya', 1989, 32),
    new Cinderella('Tanya', 1983, 37),
    new Cinderella('Tamara', 1985, 43),
    new Cinderella('Oksana', 1986, 32),
]
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, year, shoe_size) {
        this.name = name;
        this.year = year;
        this.shoe_size = shoe_size;
    }

}
let prince = new Prince('Persii', 1988, 43)
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.foot_size === prince.shoe_size){
        console.log(`We found her!!! She is ${cinderella.name}`)
    }
}
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = cinderellas.find(value => value.foot_size === prince.shoe_size);
console.log(find);