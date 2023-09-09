// Condicionais

var jogador_1 = 0;
var jogador_2 = 0;
var placar;

// If itenario
jogador_1 != -1 && jogador_2 != -1? console.log('Os jogadores são validos') :
console.log('jogadores Invalidos');

// If normal
if(jogador_1 > 0 && jogador_2 == 0){
    console.log('Jogador 1 marcou um ponto!');
    placar = jogador_1 > jogador_2;
}
// else if
else if  (jogador_2 > 0 && jogador_1 == 0){

    console.log('Jogador 2 marcou um ponto!');
    placar = jogador_2 > jogador_1;
}