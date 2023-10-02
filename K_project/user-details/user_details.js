let url = new URL(location.href);
let user_id = url.searchParams.get('id');
let div_main = document.getElementById('info')
let button = document.createElement('button');
button.innerText = 'post of current user';
button.setAttribute('id', "post_button")
fetch('https://jsonplaceholder.typicode.com/users/' + user_id)
    .then(value => value.json())
    .then((user) => {
        add_info(user)
    });
function add_info(data) {
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let title = document.createElement('h3')
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
    div_main.append(div)
}
div_main.append(button)

button.onclick = fetch_posts;
function fetch_posts() {
    fetch('https://jsonplaceholder.typicode.com/users/' + user_id + '/posts')
        .then(value => value.json())
        .then((posts) => {
            let div_posts = document.createElement('div')
            div_posts.setAttribute('id', "div_post");
            for (const post of posts) {
                let div = document.createElement('div');
                div.setAttribute('id', "user_post");
                let p = document.createElement('p');
                let button = document.createElement('button');
                p.innerText = `${post.title}`;
                button.innerText = 'More';
                let location_href = "'" + '../post-details/post-details.html?value='  + JSON.stringify(post) +"'"
                button.setAttribute('onclick', "location.href=" + location_href)
                div.appendChild(p);
                div.appendChild(button);
                div_posts.appendChild(div);
            }
            document.body.appendChild(div_posts)
        });
}

