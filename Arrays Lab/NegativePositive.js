function solve(array){
    let outputArray=[];
    for (const element of array) {
        if(Number(element)<0){
            outputArray.unshift(element)
        }else{
            outputArray.push(element);
        }
    } 
    console.log(outputArray.join('\n'));
}

solve([-1,1,2,-3,0,5,1,-5]);