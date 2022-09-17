function logTruthiness(value){
    if(value){
        console.log("Truty")
    }else{
        console.log('Falsy')
    }
}

logTruthiness(3.14)       //Truty
logTruthiness({})         //Truty 
logTruthiness(NaN)       //Falsy
logTruthiness("NAN")     //Truty
logTruthiness([])        //Truty
logTruthiness("")        //Falsy
logTruthiness(undefined) //Falsy
logTruthiness(0)         //Falsy

