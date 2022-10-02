function solve(array,index){
index = Number(index);
let output = [];
for(let i = 0; i < array.length; i += index){
output.push(array[i]);
}
return output;
}
console.log(solve(['1','2','3','4','5','6','7'],3));