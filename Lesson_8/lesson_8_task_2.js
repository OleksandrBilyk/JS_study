//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
{
    class Client{
        constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

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
            let order = random_stuffs()
            users[i] = new Client(i+1, names[i], names[i]+'enko', email, phone, order)
        }
        return users
    }

    function random_stuffs (){
        let staffs = ['apple', 'banana', 'milk', 'candy', 'bread', 'lemon', 'ice cream', 'water', 'cheese', 'meat']
        let random = () => Math.floor(Math.random() * 10) + 1;
        let rand = random()
        let staffs_end = []
        for (let i = 0; i < rand; i++) {
            staffs_end[i] = staffs[random()-1];
        }
    return staffs_end

    }

    let names = ['Maksym', 'Ivan', 'Vasyl', 'Oleksandr', 'Roman', 'Borys', 'Kyryl', 'Artur', 'Andriy', 'Yaroslav']
    let array_clients = formed_users(names);
    console.log(array_clients)


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    let sort = array_clients.sort((u1, u2) => {
        return u1.order.length - u2.order.length
    });
    console.log(sort)
}




