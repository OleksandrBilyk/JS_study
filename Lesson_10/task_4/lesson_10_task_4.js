//зробити масив на 100 об'єктів та дві кнопки prev next
//при завантажені сторінки з'являються перші 10 об'єктів.
//    При натисканні next виводяться настпні 10 об'єктів
//При натисканні prev виводяться попередні 10 об'єктів

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
];
let products100 = [];
let j = 0;
for (let i = 0; i < 100; i++) {
    if (i % 4 === 0){
        j = 0;
        products100[i] = products[j];
    } else {
        j += 1;
        products100[i] = products[j];
    }
}
console.log(products100)
let gallery = document.getElementById('gallery');
let page = 0;
let button_prev = document.getElementById('prev')
let button_next = document.getElementById('next')
download_page(page)
button_prev.onclick = function () {
    if (page !== 1 && page ) {
       remove_prod()
       page -= 1;
       download_page(page)
    }
}
button_next.onclick = function () {
    if (page !== 9) {
        remove_prod()
        page += 1;
        download_page(page)
    }
}
function download_page(page) {
    for (let i = 0; i < 10; i++) {
        let product = document.createElement('div')
        product.setAttribute('id', 'product_'+ i );
        product.setAttribute('grid-area', 'product_'+ i );
        let title = document.createElement('h2');
        title.innerText = products100[page*10+i].title;
        let price = document.createElement('p');
        price.innerText = 'price: ' + products100[page*10+i].price;
        let photo = document.createElement('img')
        photo.src = products100[page*10+i].image;
        product.append(photo, title, price);
        gallery.appendChild(product);
    }
}
function remove_prod (){
    for (let i = 0; i < 10; i++) {
        let removed = document.getElementById('product_'+ i)
        removed.remove()
    }
}