const student=[
    { id:18,name:"sakib"},
    {id:79,name:"tamim"},
    {id:40,name:"mushfiq"},
    {id:25,name:"mustafiz"}


];
const names=student.map(s=>s.name);
const ids=student.map(s=>s.id);
const bigger=student.filter(s=>s.id>40);
const biggerOne=student.find(s=>s.id>40);

// console.log(ids);
// console.log(bigger);
console.log(biggerOne);
