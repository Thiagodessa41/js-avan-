// spread operator
let primeiros = [1, 2, 3];



//para juntar arrays os tres pontos faz isso
/*let numeros = [...primeiros, 4, 5, 6];
console.log(numeros);*/



//vamos fazer a mesma coisa com objetos
/*let pessoa = {
    nome: 'thiago',
    sobrenome: 'camargo',
    idade: 39
}

let novapessoa = {
    ...pessoa,
    status: 'ativo',
    cidade: 'americana'
}

 console.log(novapessoa);*/

 function novoUsuario (info){
     let data = {
         ...info, 
         status: 'ativo',
         inicio: '20/03/2023',
         codigo: '123123'
     };
     console.log(data);
 }

 novoUsuario({nome: 'josé', sobrenome: 'silva', cargo: 'dev' })

