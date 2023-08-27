{
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    for (let i = 0; i < 3; i++) {
        for (const user of users) {
            switch (i){
                case 0:
                    if (user["status"]){
                        document.write(`<p class="user">${user.name} - status: true</p>`)
                    }
                    break;
                case 1:
                    if (!user["status"]){
                        document.write(`<p class="user">${user.name} - status: false</p>`)
                    }
                    break;
                case 2:
                    if (user["age"] > 30){
                        document.write(`<p class="user">${user.name} - age greater than 30</p>`)
                    }
                    break;

            }
        }
        document.write(`<br>`)
    }
}