//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let age_user = document.forms.age_user;

age_user.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    if (+age < 18){
        let warning_msg = document.createElement('div');
        warning_msg.setAttribute('class', 'warning_msg');
        let h3 = document.createElement('h3');
        h3.innerText = 'Your age is less than 18!';
        warning_msg.appendChild(h3)
        document.body.appendChild(warning_msg)
    }
}
