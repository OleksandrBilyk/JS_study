//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.getElementById('button')
button.onclick = function () {
    let removed = document.getElementById('text')
    removed.remove()
}
