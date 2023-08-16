{
    let s_text_1 = "hello";
    let s_text_2 = "owu";
    let s_text_3 = "com";
    let s_text_4 = "ua";
    let n_number_1 = 1;
    let n_number_2 = 10;
    let n_number_3 = -999;
    let n_number_4 = 123;
    let n_number_5 = 3.14;
    let n_number_6 = 2.7;
    let n_number_7 = 16;
    let b_bool_1 = true;
    let b_bool_2 = false;
    console.log(s_text_1);
    console.log(s_text_2);
    console.log(s_text_3);
    console.log(s_text_4);
    console.log(n_number_1);
    console.log(n_number_2);
    console.log(n_number_3);
    console.log(n_number_4);
    console.log(n_number_5);
    console.log(n_number_6);
    console.log(n_number_7);
    console.log(b_bool_1);
    console.log(b_bool_2);
}
{
    let firstName = "Oleksandr";
    let middleName = "Vasyliovych";
    let lastName = "Bilyk";
    let person = `${lastName} ${firstName} ${middleName}`;
    console.log(person);
}
{
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
{
    let firstName = prompt("Enter your first name:");
    let middleName = prompt("Enter your middle name:");
    let how_old = +prompt("Enter how you old:");
    console.log(`${firstName} ${middleName}`, how_old)
}