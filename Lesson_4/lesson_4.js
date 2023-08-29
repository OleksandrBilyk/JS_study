const pi = 3.1415
/*-------- task 1------------*/
{
    function square_rectangle(a, b) {
        return a*b;
    }
}
/*-------- task 2------------*/
{
    function square_circle(r) {
        return pi*r*r;
    }
}
/*-------- task 3------------*/
{
    function square_cylinder(h, r) {
        return 2*pi*r*(h+r);
    }
}
/*-------- task 4------------*/
{
    function array_output(array) {
        for (const arrayElement of array) {
           console.log(`${arrayElement}`)
        }
    }
}
/*-------- task 5------------*/
{
    function create_par(paragraf) {
        document.write(`<p>${paragraf}</p>`)
    }
}
/*-------- task 6------------*/
{
    function create_list_three_elem(text) {
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    }
}
/*-------- task 7------------*/
{
    function create_list(text, num_of_row) {
        document.write(`<ul>`)
        for (let i = 0; i < num_of_row; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
    }
}
/*-------- task 8------------*/
{
    function create_list_of_array(array) {
        document.write(`<ul>`)
        for (const arrayElement of array) {
            document.write(`<li>${arrayElement}</li>`)
        }
        document.write(`</ul>`)
    }
}
/*-------- task 9------------*/
{
    function output_array(array) {
        for (const arrayElement of array) {
            document.write(`<div>`)
            for (const arrayKey in arrayElement) {
                document.write(`<p>${arrayKey}: ${arrayElement[arrayKey]}</p>`)
            }
            document.write(`</div>`)
        }
    }
}
/*-------- task 10------------*/
{
    function minim_elem_array(array) {
        let min = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min){
                min = array[i]
            }
        }
        return min
    }
}
/*-------- task 11------------*/
{
    function sum(arr) {
        let summ = 0
        for (const arrayElement of arr) {
             summ += arrayElement
        }
        return summ
    }
}
/*-------- task 12------------*/
{
    function swap(arr, index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr
    }
}
/*-------- task 13------------*/
{
    function exchange(sumUAH,currencyValues,exchangeCurrency) {
        for (const currencyElement of currencyValues) {
            if (currencyElement['currency'] === exchangeCurrency) {
                return sumUAH / currencyElement['value']

            }

        }
        return 'unknown currency'
    }
}
/* ---------  test  block  -------------*/
{
    let number_array = [1, 23, 12, 54, 88, -3, 16, 8, 2]
    let test_array = [12, 6, true, '5', false, 72]
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
    let currency = [{currency:'USD',value:40},{currency:'EUR',value:42}, {currency: 'PLN', value: 8.99}]


    console.log(square_rectangle( 4, 5))
    console.log(square_circle(10))
    console.log(square_cylinder(5,10))
    array_output(number_array)
    create_par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repellat.')
    create_list_three_elem('Lorem ipsum dolor sit amet, consectetur.')
    create_list('Lorem ipsum dolor sit amet, consectetur adipisicing.', 12)
    create_list_of_array(test_array)
    output_array(users)
    console.log(minim_elem_array(number_array))
    console.log(sum(number_array))
    console.log(swap(number_array, 4, 6))
    console.log(exchange(1000, currency, 'PLN'))
    console.log(exchange(1000, currency, 'RUS'))

}