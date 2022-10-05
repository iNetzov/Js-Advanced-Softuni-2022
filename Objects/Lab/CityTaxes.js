function createObject(name,population,treasury,taxRate = 10){
    let object = {
        name,
        population,
        treasury,
        taxRate : taxRate,
        collectTaxes(){
            return Math.floor(this.treasury += this.population * this.taxRate)},
        applyGrowth(percent){
            return Math.floor(this.population += population + population * percent)},
        applyRecession(percent){
            return Math.floor(this.treasury -= treasury -treasury* percent)}
    }
    
    return object;
    }
    console.log(createObject('ivaylo',1500,2000));
    console.log(createObject('ivaylo',1500,2000));
