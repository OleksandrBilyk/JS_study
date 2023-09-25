//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

let table_form = document.forms.table;
table_form.onsubmit = function (e) {
    e.preventDefault();
    let row = this.row.value;
    let column = this.column.value;
    let text = this.text.value;
    let div_table = document.createElement('div');
    div_table.setAttribute('class', 'div_table');
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    for (let i = 0; i < row; i++) {
        let table_row = document.createElement('tr');
        table_row.setAttribute('class', 'table_row');
        for (let j = 0; j < column; j++) {
            let table_column = document.createElement('td');
            table_column.setAttribute('class', 'table_column');
            table_column.innerText = text;
            table_row.appendChild(table_column);
        }
        table.appendChild(table_row);
    }
    div_table.appendChild(table);
    let div_page = document.getElementsByClassName('page')[0];
    div_page.appendChild(div_table);
}