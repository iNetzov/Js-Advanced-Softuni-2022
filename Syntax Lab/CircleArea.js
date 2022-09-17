function circleArea(radius){
    let output = undefined;

    if(isItNumber(radius) === 'number'){
       output = (Math.PI * (radius*radius));
       output = output.toFixed(2);
    }else{
        output = `We can not calculate the circle area, because we receive a ${isItNumber(radius)}.`
    }
    console.log(output);

    function isItNumber(input){
         return (typeof input === 'number') ? 'number' : typeof input;
         
    }
}
circleArea(5);
circleArea(true)
