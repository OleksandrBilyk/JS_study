//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form_user = document.forms.form_user;

form_user.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    let user = {name, surname, age}
    console.log(user);
    let create_user = document.createElement('div');
    create_user.setAttribute('class', 'create_user')
    for (const userKey in user) {
        let h3 = document.createElement('h3');
        h3.innerText = userKey + ' - ';
        let p = document.createElement('p');
        p.innerText = user[userKey];
        create_user.append(h3, p)
    }
    document.body.appendChild(create_user)
}