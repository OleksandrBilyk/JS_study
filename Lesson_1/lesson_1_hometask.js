{
    // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    // Вивести кожну змінну за допомогою: console.log
    let s_text_1 = "hello";
    console.log(s_text_1);
    let s_text_2 = "owu";
    console.log(s_text_2);
    let s_text_3 = "com";
    console.log(s_text_3);
    let s_text_4 = "ua";
    console.log(s_text_4);
    let n_number_1 = 1;
    console.log(n_number_1);
    let n_number_2 = 10;
    console.log(n_number_2);
    let n_number_3 = -999;
    console.log(n_number_3);
    let n_number_4 = 123;
    console.log(n_number_4);
    let n_number_5 = 3.14;
    console.log(n_number_5);
    let n_number_6 = 2.7;
    console.log(n_number_6);
    let n_number_7 = 16;
    console.log(n_number_7);
    let b_bool_1 = true;
    console.log(b_bool_1);
    let b_bool_2 = false;
    console.log(b_bool_2);
}
{
    //- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    let firstName = "Oleksandr";
    let middleName = "Vasyliovych";
    let lastName = "Bilyk";
    let person = `${lastName} ${firstName} ${middleName}`;
    console.log(person);
}
{
   // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
{
   // Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
    let firstName = prompt("Enter your first name:");
    let middleName = prompt("Enter your middle name:");
    let how_old = +prompt("Enter how you old:");
    console.log(`${firstName} ${middleName}`, how_old)
}