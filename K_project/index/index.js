
fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
        let div_main = document.getElementById('main')
        for (const user of users) {
            let div = document.createElement('div');
            div.setAttribute('id', "user_block");
            let p = document.createElement('p');
            let button = document.createElement('button');
            p.innerText = `${user.id} - ${user.name}`;
            button.innerText = 'Details';
            let location_href = "'" + '../user-details/user-details.html?id=' + JSON.stringify(user.id) +"'"
            button.setAttribute('onclick', "location.href=" + location_href)
            div.appendChild(p);
            div.appendChild(button);
            div_main.appendChild(div);
        }
        document.body.appendChild(div_main)
    });

