//setInterval


function acao(){
    document.write('Executando....</br>')
}
/*
var timer = setInterval(()=>{
    document.write('Executando....</br>')
},1000)
*/


//setTimeout ele executa apenas uma vez
setTimeout (()=>{
    console.log('executou timeout!')
}, 3000);
