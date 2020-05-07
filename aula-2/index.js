const salariosDeProgramador = [1000, 1500, 2000, 3000, 3500, 4000, 4500, 6000, 6500, 7000, 8000];
const salariosDeAnalista = [1000, 1750, 2250, 4250, 6750, 5500, 7500, 8000, 3750];

function senioridade(lista) {
    lista.map(salario => {
        if(salario >= 5000){
            console.log('Esse programador é senior', salario)
        } else if (salario >= 3000 && salario < 5000){
            console.log('Esse programador é pleno', salario)
        } else{
            console.log('os liso', salario)
        }
    }) 
}

senioridade(salariosDeAnalista)

senioridade(salariosDeProgramador)


