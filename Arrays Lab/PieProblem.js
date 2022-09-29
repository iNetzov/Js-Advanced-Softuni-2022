function solve(array,firstParam,secondParam){
    let start = array.indexOf(firstParam);
    let finish = array.indexOf(secondParam)+1;
    let newArray = array.slice(start,finish);
return newArray;
}

solve(["Apple Crisp", "Mississippi Mud Pie", "Pot Pie", "Steak and Cheese Pie", "Butter Chicken Pie", "Smoked Fish Pie"]
,'Pot Pie',
'Smoked Fish Pie');