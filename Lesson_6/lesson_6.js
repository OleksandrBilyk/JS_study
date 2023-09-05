//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
{
    console.log('hello world'.length);
    console.log('lorem ipsum'.length);
    console.log('javascript is cool'.length);
}
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
{
    console.log('hello world'.toUpperCase());
    console.log('lorem ipsum'.toUpperCase());
    console.log('javascript is cool'.toUpperCase());
}
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    console.log('HELLO WORLD'.toLowerCase());
    console.log('LOREM IPSUM'.toLowerCase());
    console.log('JAVASCRIPT IS COOL'.toLowerCase());
}
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let str = ' dirty string   ';
    function str_cleaner (string){
        let split = string.split(' ');
        let clean_string = ""
        for (const splitElement of split) {
            if (splitElement) {
                clean_string += splitElement + ' '
            }
        }
        return clean_string.slice(0, -1);
    }
    console.log(str_cleaner(str))
}
//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    let str = 'Ревуть воли як ясла повні';
    let stringToarray = (str) => str.split(' ');
    let arr = stringToarray(str);
    console.log(arr);
}
//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr =[10,8,-7,55,987,-1011,0,1050,0]
    let number_to_str = (array) => array.map(String)
    console.log(number_to_str(arr))
}
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    let nums = [11,21,3]
    function sortNums (array, direction) {
        if (direction === 'ascending') {
            return array.sort((a, b) => a - b)
        } else if (direction === 'descending'){
            return array.sort((a, b) => b - a)
        } else {return 'wrong argument direction'}
    }
    console.log(sortNums(nums, 'descending'))
}
