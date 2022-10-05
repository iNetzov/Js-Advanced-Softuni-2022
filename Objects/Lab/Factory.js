function solve(library,orders){
    let resultOutput = [];
    for (let {template,parts} of orders) {
        let  result =Object.assign({},template);

        for (const part of parts) {
            let func = library[part];
            result[part] = func;
        }
        resultOutput.push(result)
    }
}
solve({doA:()=>{/*...*/},doB:()=>{/*...*/},doC:()=>{/*...*/}},[{template:{id:'first'},parts:['doB']}])