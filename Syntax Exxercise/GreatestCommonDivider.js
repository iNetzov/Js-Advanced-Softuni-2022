function getGreatestCommandDivider(num1, num2){
    while(num2>0){
        let biggestDivider = num2;
        num2 = num1 % num2;
        num1 = biggestDivider;
    }
    console.log(num1)

}

getGreatestCommandDivider(15,5);
getGreatestCommandDivider(2154,458);