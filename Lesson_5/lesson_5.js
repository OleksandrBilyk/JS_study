const pi = 3.1415
let number_array = [1, 23, 12, 54, 88, -3, 16, 8, 2]
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
let test_array = [12, 6, true, '5', false, 72]
let currency = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PLN', value: 8.99}]
/*-------- task 1------------*/
//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    let square_rectangle = (a, b) =>  a * b;
    console.log(square_rectangle(4, 5))
}
/*-------- task 2------------*/
//створити функцію яка обчислює та повертає площу кола з радіусом r
{
    let square_circle = (r) => pi*r*r;
    console.log(square_circle(10));
}
/*-------- task 3------------*/
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    let square_cylinder = (h, r) => 2*pi*r*(h+r);
    console.log(square_cylinder(5,10))
}
/*-------- task 4------------*/
//- створити функцію яка приймає масив та виводить кожен його елемент
{
    let array_output = (array) => {
        for (const arrayElement of array) {
           console.log(`${arrayElement}`)
        }
    }

    array_output(number_array)
}
/*-------- task 5------------*/
//створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    let create_par = (paragraf) => {
        document.write(`<p>${paragraf}</p>`)
    }
    create_par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repellat.')
}
/*-------- task 6------------*/
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
   let create_list_three_elem = (text) => {
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    }
    create_list_three_elem('Lorem ipsum dolor sit amet, consectetur.')
}
/*-------- task 7------------*/
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    let create_list = (text, num_of_row) => {
        document.write(`<ul>`)
        for (let i = 0; i < num_of_row; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
    }
    create_list('Lorem ipsum dolor sit amet, consectetur adipisicing.', 12)
}
/*-------- task 8------------*/
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
{
    let create_list_of_array = (array) => {
        document.write(`<ul>`)
        for (const arrayElement of array) {
            document.write(`<li>${arrayElement}</li>`)
        }
        document.write(`</ul>`)
    }
    create_list_of_array(test_array)
}
/*-------- task 9------------*/
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
{
    let output_array = (array) => {
        for (const arrayElement of array) {
            document.write(`<div>`)
            for (const arrayKey in arrayElement) {
                document.write(`<p>${arrayKey}: ${arrayElement[arrayKey]}</p>`)
            }
            document.write(`</div>`)
        }
    }
    output_array(users)
}
/*-------- task 10------------*/
//створити функцію яка повертає найменьше число з масиву
{
    let minim_elem_array = (array) => {
        let min = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min){
                min = array[i]
            }
        }
        return min
    }
    console.log(minim_elem_array(number_array))
}
/*-------- task 11------------*/
//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
{
    let sum = (arr) => {
        let summ = 0
        for (const arrayElement of arr) {
            summ += arrayElement
        }
        return summ
    }
    console.log(sum(number_array))
}
/*-------- task 12------------*/
//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
{
    let swap = (arr, index1, index2) => {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr
    }
    console.log(swap(number_array, 4, 6))
}
/*-------- task 13------------*/
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
{
    let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
        for (const currencyElement of currencyValues) {
            if (currencyElement['currency'] === exchangeCurrency) {
                return sumUAH / currencyElement['value']
            }
        }
        return 'unknown currency'
    }
    console.log(exchange(1000, currency, 'PLN'))
    console.log(exchange(1000, currency, 'RUS'))
}
