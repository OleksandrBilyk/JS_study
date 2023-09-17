//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.
let div_array_2 = document.createElement('div');
document.body.appendChild(div_array_2);
div_array_2.style.display = 'flex';
for (const elem_array_courses of coursesAndDurationArray) {
    let userInfoDiv = document.createElement('div');
    userInfoDiv.setAttribute('class', 'item')
    let h1 = document.createElement('h1');
    h1.innerText = elem_array_courses.title;
    h1.setAttribute('class', 'heading')
    let p = document.createElement('p');
    p.innerText = elem_array_courses.monthDuration;
    p.setAttribute('class', 'description')
    userInfoDiv.append(h1, p);
    div_array_2.appendChild(userInfoDiv);
}