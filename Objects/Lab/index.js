let cat = {
    name:'ivaylo',
    age: 5,
    sayHello(){
        return this.name + 'say hi';
    }
}

let func = cat.sayHello;
console.log(func());