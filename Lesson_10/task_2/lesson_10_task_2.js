//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let count = localStorage.getItem('count') || '0';
let p = document.createElement('p');
p.id = 'number'
let counter = document.getElementsByClassName("counter")[0];
p.innerText = count;
count = +count
counter.appendChild(p);
count += 1;
localStorage.setItem('count', count)
