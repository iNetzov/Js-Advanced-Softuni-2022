function solve(array){
    array.sort();
    let index = 1;
    let outputArray=[];
    for (const element of array){
        outputArray.push(index + '.'+ element);        
        index++;
    }
    return outputArray.join('\n');
}
console.log(solve(['John','Bob','Cris','Emma']));