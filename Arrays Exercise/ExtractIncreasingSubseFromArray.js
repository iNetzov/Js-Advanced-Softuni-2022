function solve(array){
    array = array.map(Number);
    let currentBiggerNumber = array[0];
    let outputArray = [];
    outputArray.push(array[0]);
    for (const element of array) {
        if(element > currentBiggerNumber){
            outputArray.push(element);
            currentBiggerNumber =+ element;
        }
    }
    return outputArray;
}
console.log(solve([1,2,3,2,5,6,33,5,5,40]));
