let score = JSON.parse(localStorage.getItem('score')); // 6

let jogando_sozinho = 0; // 9
let intervalo_ID; // 9 


if (score === null){ // 7
  score ={
    wins: 0,
    lose: 0,
    tie: 0
  }
}

function Zerar(){ // 8
  score.wins = 0;
  score.lose = 0;
  score.tie = 0;
}


function autoplay(){ // 9
  if(!jogando_sozinho){ // se NÃO esta jogando sozinho 
    intervalo_ID = setInterval(function (){
      const ComputadorJogo = Jogada_PC();
      Jogo_PPT(ComputadorJogo)
    }, 1000);
    jogando_sozinho = 1; // agora esta jogando sozinho
  } else {
    clearInterval(intervalo_ID); // limpa o intervalo
    jogando_sozinho = 0; // false não ta mais jogando.
  }
}


/* botar para jogar sozinho mas não tem parada
function autoplay(){
  setInterval(function (){
    const ComputadorJogo = Jogada_PC();
    Jogo_PPT(ComputadorJogo)
  }, 1000);

}
*/

// cria uma classe no botão, chama com query e faz addEventListener('click') e pode usar a mesma classe class="add_evento" para todos os botões, esse que é a vantagem
document.querySelector('.add_evento').addEventListener('click', () => {Jogo_PPT('pedra')});

/*
---- addEventListener com click

//document.querySelector('.add_evento').addEventListener('click', () => {Jogo_PPT('papel')});

//document.querySelector('.add_evento').addEventListener('click', () => {Jogo_PPT('tesoura')});



//aqui faço utilizando keydown, metodo com letras do teclado
---- addEventListener com keydown

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'p'){
    Jogo_PPT('pedra');
  } else if (event.key === 't'){
    Jogo_PPT('tesoura');
  } else if (event.key === 'q'){
    Jogo_PPT('papel');
  }
});
*/

function Jogo_PPT(usuario){ // 2
  Computador = Jogada_PC();
  Resultado = '';

  if(usuario === 'pedra'){
    if(Computador === 'pedra'){
      Resultado = 'empate';
    } else if(Computador === 'papel'){
      Resultado = 'derrota';
    } else if(Computador === 'tesoura'){
      Resultado = 'vitoria';
    }
  }

  if(usuario === 'papel'){
    if(Computador === 'pedra'){
      Resultado = 'vitoria';
    } else if(Computador === 'papel'){
      Resultado = 'empate';
    } else if(Computador === 'tesoura'){
      Resultado = 'derrota';
    }
  }  

  if(usuario === 'tesoura'){
    if(Computador === 'pedra'){
      Resultado = 'derrota';
    } else if(Computador === 'papel'){
      Resultado = 'vitoria';
    } else if(Computador === 'tesoura'){
      Resultado = 'empate';
    }
  }

  if(Resultado === 'vitoria'){ // 3
    score.wins = score.wins + 1;
  } else if (Resultado === 'derrota'){
    score.lose = score.lose + 1;
  } else if (Resultado === 'empate'){
    score.tie = score.tie + 1;
  }

  localStorage.setItem('score', JSON.stringify(score)); // 5

  // 4
  document.querySelector('.Resultado_Partida').innerHTML = `Resultado: ${Resultado}`;
  //aqui utilizo como adicionar imagem no query, apenas no usuario
  document.querySelector('.Jogadas').innerHTML = `Você: <img src="${usuario}-emoji.png" class="Fotos_PPT"> | PC: ${Computador}`;
  document.querySelector('.Cont_Geral').innerHTML = `Vitorias: ${score.wins} | derrotas: ${score.lose} | empates: ${score.tie}`;

}




function Jogada_PC(){ // 1
  Numeros_Aleatorios = Math.random();
  Alea_PC = '';

  if(Numeros_Aleatorios >= 0 && Numeros_Aleatorios <= 1/3){
      Alea_PC = 'pedra';
  } else if (Numeros_Aleatorios >= 1/3 && Numeros_Aleatorios <= 2/3){
    Alea_PC = 'papel';
  } else if (Numeros_Aleatorios >= 2/3 && Numeros_Aleatorios <= 3/3){
    Alea_PC = 'tesoura';
  }

  return Alea_PC;
}

// 1 - função para dar valores aleatorios para uma variavel(PC)
// 2 - função onde pega um parametro do botão e analise qual jogo do usuario e PC, dependendo do que for, ele da um resultado
// 3 - aqui se cria o objeto com relação ao resultado, para assim, fazer a contagem de vitorias, derrotas e empates
// 4 - aqui pega a classe feita nos paragrafos e escreve na tela os resultados
// 5 - aqui cria localstorage, onde pega as contagens feitas no (3) e armazena para nunca perder o resultado na pagina
// 6 - como (5) estava em JSON no localstorage, aqui vamos refazer isso e transformar em valores, bem na variavel do objeto.
// 7 - faz uma analise se tem valores nulos
// 8 - logica de zerar os valores, determinando 0 para cada objeto
// 9 - logica do autoplay, onde é feito uma função dentro de uma função pegando as funções (1) e (2) e determinando um setinterval, depois cria duas variaveis, uma para booleana se é 1 ou 0, caso seja diferente de false, então ele inicial o jogo a cada 1 segundo, mas dessa vez, é computador contra computador e caso esteja jogando = 1, ele para.
