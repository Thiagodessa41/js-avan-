//objetos

/*let pessoa ={
    nome:'Thiago',
    sobrenome: 'Camargo',
    empresa: 'Novadev',
    cargo: 'Fullstack'
};

//console.log (pessoa.nome);
//console.log (pessoa.cargo);


//descontruindo objeto
//nome:nomePessoa renomeando nome da propriedade
const {nome:nomePessoa, cargo} = pessoa;
*/




// desconstruir um array
let nomes = [
    'Matheus',
    'Lucas',
    'Carlos',
    'Pedro'
];
// desconstruir  passa a posicao e o nome da propriedade
//let {0:matheus } = nomes;


//outra maneira desconstrucao
let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);

