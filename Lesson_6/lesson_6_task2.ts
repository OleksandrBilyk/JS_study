//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
 //   {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
{
interface user {title: string, monthDuration: number}

let coursesAndDurationArray: user[] = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
    let sort:user[] = coursesAndDurationArray.sort((u1: user, u2: user) => u2.monthDuration - u1.monthDuration);
 console.log(sort)
}