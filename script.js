// rest Operator
// coloque os tres pontos ira exibir todos nomes

/*function convidados(...nomes){
    console.log('Seja todos bem vindos todos os convida')
    console.log(nomes);
}

convidados('Matheus', 'Lucas', 'Maria')*/


function sorteador(...numeros){
    console.log(numeros);
    //Math.floor garante resultado numero inteiro
    //random() numero aleatorio
    //length tamanho do array
    const numeroGerado = Math.floor(random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(11,53,54,15,76,97,16)
