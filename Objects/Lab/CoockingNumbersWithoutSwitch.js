function solve(...commands){
     let intial = Number(commands.shift());
     console.log(commands)
   
    let action = {
        chop(number){return number/2},
        dice(number){return Math.sqrt(number)},
        splice(number){return number++},
        bake(number){return number * 3},
        fillet(number){return number * 0.8}
    }
    for (const command of commands) {
        intial = action[command](intial);
        console.log(intial);
    }

    return intial;
}
solve('32','chop','chop','chop','chop','chop');