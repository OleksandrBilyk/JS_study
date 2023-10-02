
//Не зрозуміло з умов задачі що саме виводити в коментах - весь коммент (разом з ключами), чи тільки
// значення, і які саме поля?
//Я вивів все - і ключі і значення всіх полів, так як в умові сказано про пост: "На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули ."

let url = new URL(location.href);
let postJSON = url.searchParams.get('value');
let post = JSON.parse(postJSON);
let div_post = document.getElementById('post_info')
create_block(div_post, post);
let comment_block = document.getElementById('comment')
fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
     .then(value => value.json())
     .then((comments) => {
        create_block(comment_block, comments)
     });
function create_block (parent_block, array_inform){
    if (Array.isArray(array_inform)){
        for (let i = 0; i < array_inform.length; i++) {
            let array_Element = array_inform[i];
            let div_comment= document.createElement('div');
            div_comment.setAttribute('id', `div_comment`+ i);
            parent_block.appendChild(div_comment)
            create_block(div_comment, array_Element)
        }
    } else{
        for (const post_elem in array_inform) {
            let div_elem = document.createElement('div');
            let text = document.createElement('h3');
            let mark = document.createElement('p');
            mark.innerText = post_elem;
            text.innerText = array_inform[post_elem];
            div_elem.setAttribute('id', `${post_elem}`);
            div_elem.append(mark, text)
            parent_block.appendChild(div_elem)
        }
    }
}
