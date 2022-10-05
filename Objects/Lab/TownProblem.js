function solve(array){
   array =  array.map(e=>{
       let data =  e.split(' <-> ');
       return {
        name: data[0],
        population: Number(data[1])
       }
    })
    let output = {};
    for (let town of array) {
        if(output[town.name] === undefined){
            output[town.name] = town.population;
        }else{
            output[town.name] += town.population;
        }
    }
    for(let name in output){
        console.log(`${name} : ${output[name]}`)
    }
    }

solve(['Istanbul <-> 10000','Sofia <-> 20000','St.Zagora <-> 30000','Plovdiv <-> 40000','Varna <-> 50000','Varna <-> 50000']);