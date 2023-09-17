//Цикл в циклі
//- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let div_course_card = document.createElement('div');
    div_course_card.setAttribute('class', 'course_card')
    let title = document.createElement('div');
    title.setAttribute('class', 'title')
    let h3 = document.createElement('h3');
    h3.innerText = course.title;
    title.appendChild(h3);
    let monthDuration_div = document.createElement('div');
    monthDuration_div.setAttribute('class', 'monthDuration')
    let monthDuration = document.createElement('h4');
    monthDuration.innerText = 'Month Duration: ' + course.monthDuration;
    monthDuration_div.appendChild(monthDuration);
    let hourDuration_div = document.createElement('div');
    hourDuration_div.setAttribute('class', 'hourDuration')
    let hourDuration = document.createElement('h4');
    hourDuration.innerText = 'Hour Duration: ' + course.hourDuration;
    hourDuration_div.appendChild(hourDuration);
    let Duration = document.createElement('div');
    Duration.setAttribute('class', 'Duration')
    Duration.append(monthDuration_div, hourDuration_div)
    let div_modules = document.createElement('div');
    div_modules.setAttribute('class', 'modules')
    let ul = document.createElement('ul');
    div_modules.appendChild(ul);
    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    div_course_card.append(title, Duration, div_modules);
    document.body.appendChild(div_course_card);
}
