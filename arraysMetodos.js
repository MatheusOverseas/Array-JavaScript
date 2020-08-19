const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa será excluido
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton'); //  adciona no ínicio
console.log(pilotos);

//splice pode adcionar e remover elementos
//adcionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);