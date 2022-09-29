function solve(array){
return array
            .filter((n,i)=> i % 2 !== 0 )
            .map(n=> n * 2)
            .reverse()
            .join(' ');
}
let a = solve(['10','15','20','25'])
console.log(a);