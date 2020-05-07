const name = "mateus"
 
let exemple = "meio milenio"

exemple = 20


const list = ['tomate', 'cebola', 'batata', 'cenoura', 'macaxeira']

const maisgostoso = list[2]

const menosgostoso = list[1]

const texto = `a verdura que eu mais gosto é ${maisgostoso} e o que eu menos gosto é o ${menosgostoso}`

let verduras = list.map(item => {
    console.log(item)
})

function soma(n, y, x){
    return `${n} ${y} ${x}`
}