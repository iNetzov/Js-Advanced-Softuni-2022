function isItTheSame(number){
    let numbers = number+''.split('');
    let isItTheSame = true;
    let sum  = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[0] !== numbers[i]){
            isItTheSame =  false;
            sum += Number(numbers[i])

        }else{
            sum  += Number(numbers[i]);

        }
    }
    console.log(isItTheSame)
    console.log(sum)
}
isItTheSame(2222222);
(isItTheSame(1234));
// console.log(isItTheSame(2222223));