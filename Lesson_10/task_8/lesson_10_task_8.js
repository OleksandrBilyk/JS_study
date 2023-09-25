//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
//при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//    зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//   При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається




let deposite = +localStorage.getItem('bank') || 90;
let deposite_div = document.getElementById("deposite_div");
console.log(deposite_div)
let p = document.createElement('p');
let old_time = +localStorage.getItem('old_time');
let now_time = new Date().getTime()
if (now_time - old_time > 10000){
    deposite += 10;
    localStorage.setItem('bank', deposite.toString())
}
p.innerText = deposite + ' грн'
deposite_div.appendChild(p);
localStorage.setItem('old_time', now_time.toString())

//
// p.id = 'number'
// let counter = document.getElementsByClassName("counter")[0];
// p.innerText = count;
// count = +count
// counter.appendChild(p);
// count += 1;
// localStorage.setItem('count', count)