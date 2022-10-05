let arr = [1,2,3,4,5,6,7,8];
let [first,second,...third] = arr;
console.log(first);
console.log(second);
console.log(third);

// Destuction

let student = {
    name: 'Ivan',
    age: 15,
    gender:'M',
    grade:6.00,
    class:'10A',
    classNumber:12

}
let {name,age,gender,...rest} = student;

console.log(age);
console.log(gender);
console.log(name)
console.log(rest);

//Assaining Objects
let objectOne = {
    name: 'Pesho',
    age: 32,
    gender: 'M'
}
let objectTwo = objectOne;
// It prints Pesho Petrov couse of referanction
// User assain to take object to other object
let objectThree = Object.assign({},objectOne);
objectOne.name = 'Pesho Petrov';
console.log(objectOne);
console.log(objectTwo);
console.log(objectThree);


// Getting keys and values from object
console.log(Object.keys(objectThree));
console.log(Object.values(objectThree));
console.log(Object.entries(objectThree));
