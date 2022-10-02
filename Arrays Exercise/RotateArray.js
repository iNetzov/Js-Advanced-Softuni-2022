function solve(array,index){
    for(let i = 0; i< index; i++){
       array.unshift(array.pop());
    }
    return array.join(' ');
}
console.log(solve(['1','2','3','4'],2));