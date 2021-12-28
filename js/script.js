var saidadetexto = document.querySelector('#saidadetexto');
var mensagem = '';
    
function mostrarTabuada(){
    //Perguntar um numero para o usuário
    var numero = prompt('Digite um numero');    

    //Converter o numero
    numero = parseFloat(numero);

    //variavel para o indice
    var indTaboada = 1;       

    while(indTaboada <= 1000){
        mensagem += numero + ' x ' + indTaboada + ' = ' + (numero * indTaboada) + '<br/>';       
        
        if(indTaboada % 10 === 0){
            mensagem += "<hr/>"
        }

        indTaboada++;
    }

    //mostrar mensagem no output
    saidadetexto.innerHTML = mensagem;
}
        
function limparTabuada(){
    mensagem = '';
    saidadetexto.innerHTML = mensagem;
} 
               