//- створити блок,
let block = document.createElement('div');
//   - додати йому класи wrap, collapse, alpha, beta
block.setAttribute('class', 'wrap collapse alpha beta')
console.log(block.getAttribute('class'))
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'silver';
block.style.color = 'gold';
block.style.fontSize = '30px';
//- додати цей блок в body.
document.body.appendChild(block);
//- клонувати його повністю, та додати клон в body.
document.body.appendChild(block.cloneNode(true));

//- Є масив:
//    ['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let navigation = ['Main','Products','About us','Contacts']
let div_navigation = document.createElement('div');
document.body.appendChild(div_navigation);
div_navigation.setAttribute('class', 'table')
let ul = document.createElement('ul');
div_navigation.appendChild(ul);
for (const elem_navigation of navigation) {
    let li = document.createElement('li');
    li.innerText = elem_navigation;
    ul.appendChild(li);
}
//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
let div_array = document.createElement('div');
document.body.appendChild(div_array);
div_array.style.display = 'flex';
for (const elem_array_courses of coursesAndDurationArray) {
    let userInfoDiv = document.createElement('div');
    userInfoDiv.setAttribute('class', 'userInfoDiv')
    let info = document.createElement('p');
    info.innerText = 'title: ' + elem_array_courses.title + '-' + 'monthDuration:' + elem_array_courses.monthDuration;
    userInfoDiv.appendChild(info);
   div_array.appendChild(userInfoDiv);
}

