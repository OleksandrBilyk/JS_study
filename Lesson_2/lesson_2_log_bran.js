{
    let x = +prompt("Enter a number");
    if (x) {                     //або (!!х), або (х !== 0)
        console.log("Right");
    } else {
        console.log("Wrong");
    }
}
{
    let time;
    time = 32;
    //time = +prompt("Enter a minute for 0 to 59")
    if (0 <= time && time <= 14) {
        console.log("first quarter");
    } else if (15 <= time && time <= 29) {
        console.log("second quarter");
    } else if (30 <= time && time <= 44) {
        console.log("third quarter");
    } else if (45 <= time && time <= 59) {
        console.log("forth quarter");
    } else {
        console.log("Wrong number");
    }
}
{
    let day;
    day = 18;
    //day = +prompt("Enter a day for 0 to 31")
    if (1 <= day && day <= 10) {
        console.log("first decade");
    } else if (11 <= day && day <= 20) {
        console.log("second decade");
    } else if (21 <= day && day <= 31) {
        console.log("third decade");
    } else {
        console.log("Wrong entering");
    }
}
{
    let list_of_affairs = ["breakfast", "dinner", "supper", "playing games", "working", "educating", "watching films", "sleeping", "meeting with friends", "playing football"];
    let day = prompt("Enter a day");
    switch (day){
        case "1":
            console.log("monday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[6]);
            console.log(list_of_affairs[7]);
            break;
        case "2":
            console.log("tuesday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[5]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[3]);
            console.log(list_of_affairs[7]);
            break;
        case "3":
            console.log("wednesday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[5]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[3]);
            console.log(list_of_affairs[7]);
            break;
        case "4":
            console.log("thursday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[6]);
            console.log(list_of_affairs[7]);
            break;
        case "5":
            console.log("friday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[4]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[5]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[3]);
            console.log(list_of_affairs[7]);
            break;
        case "6":
            console.log("saturday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[5]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[8]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[3]);
            console.log(list_of_affairs[7]);
            break;
        case "7":
            console.log("sunday");
            console.log(list_of_affairs[0]);
            console.log(list_of_affairs[9]);
            console.log(list_of_affairs[1]);
            console.log(list_of_affairs[8]);
            console.log(list_of_affairs[2]);
            console.log(list_of_affairs[6]);
            console.log(list_of_affairs[7]);
            break;
        default:
            console.log("Wrong entering")
    }
}
{
    let number_1 = +prompt("Enter a first number");
    let number_2 = +prompt("Enter a second number");
    if (number_1 === number_2) {
        console.log("the numbers are equal");
    } else if (number_1 < number_2) {
        console.log("second number greatest");
    } else {
        console.log("first number greatest");
    }
}
