function solve(number){

    console.log(sum(number));
    console.log(inverse(number));
    console.log(concat(number));

    function sum(number){
        let sum  = 0;
        number.forEach(element => {
            sum += element;
        });
        return sum;
    }
    function inverse(number){
        let sum = 0;
        number.forEach(element => {
         sum += 1/element    
        });
        return sum
    }
    function concat (number){
        let output="";
        number.forEach(element => {
            output+=element;
        });
        return output;
    }
}
solve([1,2,4])