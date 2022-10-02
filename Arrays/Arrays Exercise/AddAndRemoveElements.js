function solve(array){
    let number = 1;
    let sum  = [];
    for (const element of array) {
        if(element === 'add'){
            sum.push(number);
            number += 1;
        }else {
            sum.pop();
            number += 1;
                }
    }
    if(sum.length === 0 ){
        return 'Empty';
    }else{
        return sum.join('\n');
    }
}
console.log(solve(['add','add','add','add']));
console.log(solve(['add','add','remove','add','add']));
console.log(solve(['remove']));
console.log(solve(['remove','remove']));