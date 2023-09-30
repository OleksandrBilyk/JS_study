let url = new URL(location.href);
console.log(url);
let user_id = url.searchParams.get('id');
let div_main = document.getElementById('info')
fetch('https://jsonplaceholder.typicode.com/users/' + user_id)
    .then(value => value.json())
    .then((user) => {
        console.log(user)
        add_info(user)
    });
function add_info(data) {
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let title = document.createElement('h3')
    console.log(data)
    let flag = true;
    for (const elem_data in data) {
        if (typeof data[elem_data] === "object"){
            add_info(data[elem_data])
        } else {
            if (flag) {
                switch (elem_data) {
                    case 'id':
                        title.innerText = 'Person:'
                        break;
                    case 'name':
                        title.innerText = 'Job:'
                        break;
                    case 'street':
                        title.innerText = 'Address:'
                        break;
                    case 'lat':
                        title.innerText = 'Location:'
                        break;
                }
                div.setAttribute('id', `${elem_data}`);
                flag = false;
            }
            let li = document.createElement('li');
            let p = document.createElement('p');
            p.innerText = `${elem_data} - ${data[elem_data]}`;
            li.appendChild(p);
            ul.appendChild(li);
            div.append(title, ul);
        }
    }
    div_main.appendChild(div)
}