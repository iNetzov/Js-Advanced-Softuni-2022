function solve(array){
    array.sort((a,b)=> a-b);
return array.slice(array.length/2);
}

solve([4,7,2,5])
solve([3,19,14,7,2,19,6])
solve([1,2,3])