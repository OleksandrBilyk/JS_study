//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let sort = coursesAndDurationArray.sort((u1, u2) => {
        return u2.monthDuration - u1.monthDuration
    });
    console.log(sort)

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let filtered_courses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
     console.log(filtered_courses);

//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

    let maped_courses = coursesAndDurationArray.map(function (value, index) {
        return {...value, id: index + 1};
    });
    console.log(maped_courses);