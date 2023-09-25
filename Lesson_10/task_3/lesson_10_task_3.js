//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let json = localStorage.getItem('session')
let info = json ? JSON.parse(json) : [];
console.log(info)
let information_window = document.createElement('div');
information_window.setAttribute('class', 'information_window')
for (const info_Element of info) {
    for (const info_elem in info_Element) {
        let h3 = document.createElement('h3');
        h3.innerText = info_elem + ' - ';
        let p = document.createElement('p');
        p.innerText = info_Element[info_elem];
        information_window.append(h3, p)
    }
}

document.body.appendChild(information_window)