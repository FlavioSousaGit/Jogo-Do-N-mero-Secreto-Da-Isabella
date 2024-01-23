let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*100 +1); // Gerar número aleatório
}

function colocarTextoNaTela(tag, texto) {
    let preencherCampo = document.querySelector(tag);
        preencherCampo.innerHTML= texto; // Essa function imprimi na tela. É necessario chamar a função e colocar a <tag> que vc deseja imprimir.
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial() {
    colocarTextoNaTela("h1","Jogo do número secreto da ISABELLA");
    colocarTextoNaTela("p","Escolha um número entre 1 e 100");
}
function verificarChute(){
    let chute = document.querySelector("input").value; // Pegar o valor digitado pelo usuário na tela e armazenar na Var. "chute"
    if (chute==numeroSecreto){
        colocarTextoNaTela("h1", "Acertou" );
        let palavraTentativa = tentativas > 1 ? "Tentativas":"Tentativa"; // verificar número de tentativas na Var "tentativas". se 1 imprimir "tentativa" se não imprimir "tentativas" 
                
        colocarTextoNaTela("p", "Parabéns você descobriu o número secreto com: " + tentativas +" " + palavraTentativa);
    } else if (chute > numeroSecreto){
        colocarTextoNaTela("h1", "Errou");
        colocarTextoNaTela ("p" ,"O número que você escolheu é maior que o número secreto");        
    }else {
        colocarTextoNaTela("h1", "Errou");
        colocarTextoNaTela ("p" ,"O número que você escolheu é menor que o número secreto");
        document.getElementById("reiniciar").removeAttribute("disabled"); // selecionar id "reiniciar" e remover elemento do id "disabled"
    }
    tentativas++;
    limparTela(); // chamar function limparTela
}
function limparTela() {
    chute= document.querySelector("input"); // Limpar tela da caixa de texto 
    chute.value = ""; 
}
function reiniciarJogo() {  // Function relacionada ao botão "Reiniciar jogo". É necessario colocar ás function para reiniciar o jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciarJogo").setAttribute("disabled", true); // Desativar o botão "reiniciarJogo" na primeira rodada.
   }


