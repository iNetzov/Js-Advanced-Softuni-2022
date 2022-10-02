function solve(array){
    let first = Number (array.shift());
    let last = Number (array.pop());
    let sum;
    if(last === undefined){
        sum = first*2;
    }else{
        sum =  first+last;
    }
    return sum;
}

console.log(solve(['20','30','40']));