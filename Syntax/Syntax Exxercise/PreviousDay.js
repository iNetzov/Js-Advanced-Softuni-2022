
function solve(year,month,day){
    let createDateString = `${year}-${month}-${day}`
   return previousDay(new Date(createDateString));

   function previousDay(date = new Date()){
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    let output = `${previous.getFullYear()}-${previous.getMonth()+1}-${previous.getDate()}`;
    return output;
}
}


console.log(solve('2016','9','30'))