function getFactors(number){
    let lista = []
    for(let n = 1; n <= Math.sqrt(number); n++){
        if(number % n === 0) {
            lista.push(n) 
            if(number / n != n){
                lista.push(number / n)
            }
        }
    }
    return lista
} 

function isPrime(number) {
    if(getFactors(number).length === 2) {
        return true
    } else{
        return false
    } 
}

function getGreatestPrimeFactors(number) {
    let lista = getFactors(number)
    let greatestPrimeFactors = 1

    lista.map(factor => {
        if(factor > greatestPrimeFactors && isPrime(factor)){
            greatestPrimeFactors = factor
        }
    }) 
    return greatestPrimeFactors
}
