// let frutas = ['morango', 'banana', 'mamão', 'pera'];

// console.log(frutas.includes('banana'))

let frutas = ['morango', 'banana', 'mamão', 'pera']

if(frutas.includes('abacaxi')) { // includes verifica se é vredadeiro ou falso 
    console.log('Abacaxi existe no array')
} else if(frutas.includes('pera')){
    console.log('pera existe no array')
} else {
    console.log('nem pera nem abacaxi existem no array frutas')
}