//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
{
    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let names = ['Maksym', 'Ivan', 'Vasyl', 'Oleksandr', 'Roman', 'Borys', 'Kyryl', 'Artur', 'Andriy', 'Yaroslav']
    function formed_users(names){
        let users =[];
        let email = '';
        for (let i = 0; i < names.length; i++) {
            if (i % 2) {
                email = names[i] + '@ukr.net'
            } else {
                email = names[i] + '@google.com'
            }
            let phone = '044-' + Math.floor(Math.random() * 999) + '-' + Math.floor(Math.random() * 99) + '-' + Math.floor(Math.random() * 99)
            users[i] = new User(i+1, names[i], names[i]+'enko', email, phone)
        }
        return users
    }

    let array_users = formed_users(names);
    console.log(array_users)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    let filtered_users = array_users.filter(value => !(value.id % 2));
    console.log(filtered_users);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    let sort = array_users.sort((u1, u2) => {
        return u1.id - u2.id
    });
    console.log(sort)
}
