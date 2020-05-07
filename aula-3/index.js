function isDivisibleForThree(number) {
    if(number % 3 === 0) {
        return true
    } else {
        return false
    } 
}

function isDivisibleForFive(number) {
    if(number % 5 === 0) {
        return true
    } else {
        return false
    } 
}

function sumNumberDivForFiveOrThree(number) {
    let lista =[]
    let soma = 0
    for(let n = 1; n < number; n++) {
        if(isDivisibleForThree(n) || isDivisibleForFive(n)) {
            lista.push(n)
        } 
    } 
    soma = lista.reduce((accumuleitor, currentValue) => accumuleitor + currentValue)
    console.log(soma)
} 

function soma() {

}






for(let h = 0; h <= 12; h++)
console.log(h)