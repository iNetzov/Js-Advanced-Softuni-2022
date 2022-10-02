function calculatePrice(typeOfFruite,weight,pricePerKilo){
   let weightInKilos =  weight / 1000;

   console.log(`I need $${(pricePerKilo*weightInKilos).toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${typeOfFruite}.`);
}

calculatePrice('orange',2500,1.80);