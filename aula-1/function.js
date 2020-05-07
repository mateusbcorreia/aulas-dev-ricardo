const notasSalaA = [10, 9, 6, 10, 7, 8, 10, 10, 8, 5, 10, 7, 9, 7];
const notasSalaB = [7, 5, 9, 3, 7, 8, 5, 10, 4, 6, 4, 7];

function mediaDaSala(sala) {
  const numeroDeAlunosDaSala = sala.length;
  const somatorioDasNotasDosAlunosDaSala = sala.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const media = somatorioDasNotasDosAlunosDaSala / numeroDeAlunosDaSala;
  return media;
}

//console.log(mediaDaSala(notasSalaA));
//console.log(mediaDaSala(notasSalaB));
const mediaA = mediaDaSala(notasSalaA);
const mediaB = mediaDaSala(notasSalaB);

function isMediaGood(media) {
  if (media >= 7) {
    console.log("Essa turma eh fera!");
  } else if (media > 5 && media < 7) {
    console.log("Essa turma pode dar certo");
  } else if (media > 2 && media < 5) {
    console.log("Ta ruim");
  } else {
    console.log("Pior");
  }
}
isMediaGood(mediaB);

const numeroDeAlunosDaSalaA = notasSalaA.length;

const somatorioDasNotasDosAlunosDaSalaA = notasSalaA.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const mediaDasNotasDaSalaA =
  somatorioDasNotasDosAlunosDaSalaA / numeroDeAlunosDaSalaA;

console.log(mediaDasNotasDaSalaA);

const numeroDeAlunosDaSalaB = notasSalaB.length;

const somatorioDasNotasDosAlunosDaSalaB = notasSalaB.reduce((a, b) => a + b);

const mediaDasNotasDaSalaB =
  somatorioDasNotasDosAlunosDaSalaB / numeroDeAlunosDaSalaB;

console.log(mediaDasNotasDaSalaB);

const numeroDeAlunosDaSalaB = notasSalaB.length;

const somatorioDasNotasDosAlunosDaSalaB = notasSalaB.reduce((a, b) => a + b);

const mediaDasNotasDaSalaB =
  somatorioDasNotasDosAlunosDaSalaB / numeroDeAlunosDaSalaB;

console.log(mediaDasNotasDaSalaB);

const numeroDeAlunosDaSalaB = notasSalaB.length;

const somatorioDasNotasDosAlunosDaSalaB = notasSalaB.reduce((a, b) => a + b);

const mediaDasNotasDaSalaB =
  somatorioDasNotasDosAlunosDaSalaB / numeroDeAlunosDaSalaB;

console.log(mediaDasNotasDaSalaB);
