function findLargestNumber(numberOne, numberTwo, numberTree) {
    let largest = undefined;
    if(numberOne >= numberTwo && numberOne >= numberTree){
        largest = numberOne;    
    }else if(numberTwo >= numberOne && numberTwo >= numberTree){
        largest = numberTwo;
    }else{
        largest = numberTree;
    }
    console.log(`The largest number is ${largest}`);
}

findLargestNumber(1,2,3);
findLargestNumber(3,2,1);
findLargestNumber(2,3,1);
