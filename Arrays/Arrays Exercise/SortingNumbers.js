function solve(array){
    array.map(Number);
    let smallestToBiggestArray = array.sort((a,b) => b-a);
    let output = [];
    while(smallestToBiggestArray.length > 0){
        output.push(smallestToBiggestArray.pop())
        output.push(smallestToBiggestArray.shift())
    }
    return output;

}
console.log(solve([-3,55,333,2,1,8,12,-7]));