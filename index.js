function isdivisibleforthree(a) {
    if(a%3===0){
        return true
    }else{
        return false
    }
}
function isdivisibleforfive(a) {
    if(a%5===0){
        return true
    }else{
        return false
    }
}
function listofdivnumber(a){
    let list=[]
    for(let n=1; n<a; n++){
        if(isdivisibleforthree(n) || isdivisibleforfive(n)){
            list.push(n)
        }
    }
    const humberto=list.reduce((acumulador, currentvalue) =>acumulador + currentvalue)
    console.log(humberto)
} 


