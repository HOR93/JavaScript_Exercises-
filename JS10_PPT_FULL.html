<!DOCTYPE html>

<html>
  <header>
    <title>Treinando HTML, CSS e JS</title>

    <style>

      /*
      height: tamanho, margin: quanto pro lado/cima, width: espessura, padding: quanto pro lado/cima o quadro, pointer: mãozinha
      */
      body{
        background-color: rgb(25, 25, 25);
        font-weight: bold;
        font-family: sans-serif;
        color: rgb(255, 255, 255);
        font-family: Arial;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        text-align: center; /* Centraliza o texto */
        }

      .titulo{
        font-size: 30px;
        font-weight: bold;
      }

      .Fotos_PPT{
        height: 50px;
      }

      button{
        border-radius: 60px; 
        border: 1px solid white;
        background-color: transparent;
        width: 100px;
        height: 100px;
        margin-right: 10px;
        cursor: pointer;

        
      }

      .botão_zerar{
        background-color: white;
      }
      

      /*button{
        
        background-color: green;
        color: white;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        border: 2px solid black;
        border-width: 10px;
        padding: 15px;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer; /* ficar uma mão no negocio
        

      }
      */

    </style>


  </header>

  <body>

    <p class="titulo">Pedra, Papel e Tesoura v1.0</p>

    <button onclick="Jogo_PPT('pedra')">
      <img src="pedra-emoji.png" class="Fotos_PPT">
    </button>
  
    <button onclick="Jogo_PPT('papel')">
      <img src="papel-emoji.png" class="Fotos_PPT">
    </button>

    <button onclick="Jogo_PPT('tesoura')">
      <img src="tesoura-emoji.png" class="Fotos_PPT">
    </button>

    <button class="botão_zerar" onclick="zerar()">
      <img src="back.png" class="Fotos_PPT">
    </button>

    <p class = "resultado_geral"></p>
    <p class = "jogadas"></p>
    <p class = "contagem"></p>


    <script>
  
    /* COMO mudar a cor dos botões, mas tem que fazer pra CADA botão, só mudar BT1 e o que tem dentro do texto.
                  1                                         2
    <button class="botão1" onclick="Jogo_PPT('pedra'), mudar_cor1()">
      pedra
    </button>

          3
      .mudar_cor{
        background-color: white;
        color: black;
      }

            4
      function mudar_cor1(){
        const BT1 = document.querySelector('.botão1');

        if (BT1.innerText ==='pedra'){
          BT1.innerHTML = 'Pedra'
          BT1.classList.add('mudar_cor');
        } else {
          BT1.innerHTML = 'pedra'
          BT1.classList.remove('mudar_cor');
        }
      }     
      
      */



      let pontos = JSON.parse(localStorage.getItem('pontos'));

      if (pontos === null){
        pontos ={
          vitoria: 0,
          derrota: 0,
          empate: 0
        };
      }


      document.querySelector('.contagem').innerHTML = `Contagem atual esta:<br>Vitorias: ${pontos.vitoria} | Derrotas ${pontos.derrota} | Empate ${pontos.empate}`;


      function Jogo_PPT(Usuario){
        Computador = Jogada_PC();
        Resultado = '';

        if (Usuario === 'pedra'){
          if(Computador === 'pedra'){
            Resultado = 'empate';
          } else if (Computador ==='papel'){
            Resultado = 'derrota';
          } else if (Computador ==='tesoura'){
            Resultado =  'vitoria';
          }  
        }

        if (Usuario === 'papel'){
          if(Computador === 'pedra'){
            Resultado = 'vitoria';
          } else if (Computador ==='papel'){
            Resultado = 'empate';
          } else if (Computador ==='tesoura'){
            Resultado =  'derrota';
          }  
        }
        
        if (Usuario ==='tesoura'){
          if(Computador ==='pedra'){
            Resultado = 'derrota';
          } else if (Computador ==='papel'){
            Resultado = 'vitoria';
          } else if (Computador ==='tesoura'){
            Resultado = 'empate';
          }
        }


        if(Resultado ==='vitoria'){
          pontos.vitoria = pontos.vitoria + 1;        
        } else if (Resultado ==='derrota'){
          pontos.derrota = pontos.derrota + 1;
        } else if (Resultado ==='empate'){
          pontos.empate = pontos.empate + 1;
        }

        localStorage.setItem('pontos', JSON.stringify(pontos));


        document.querySelector('.resultado_geral').innerHTML = `Resultado da partida:<br>${Resultado}`;

        //document.querySelector('.jogadas').innerHTML = `Jogadas:<br>Você: ${Usuario} | Computador: ${Computador}`;
        // <img src="${Usuario}-emoji.png" class="Fotos_PPT"> dessa forma, ele pega o nome que é igual, por exemplo, pedra, e vai direto pra imagem
        document.querySelector('.jogadas').innerHTML = `Jogadas:<br>Você: <img src="${Usuario}-emoji.png" class="Fotos_PPT"> | Computador: <img src="${Computador}-emoji.png" class="Fotos_PPT">`;

        document.querySelector('.contagem').innerHTML = `Contagem:<br>Vitorias: ${pontos.vitoria} | Derrotas: ${pontos.derrota} | Empate: ${pontos.empate}`;
        
         
      }

      function zerar(){
        pontos.vitoria = 0;
        pontos.derrota = 0;
        pontos.empate = 0;

      }


      function Jogada_PC(){
        Numeros_Aleatorios = Math.random();
        Aleatorio_PC = '';

        if(Numeros_Aleatorios >= 0 && Numeros_Aleatorios <= 1/3){
          Aleatorio_PC = 'pedra';
        } else if (Numeros_Aleatorios >= 1/3 && Numeros_Aleatorios <= 2/3){
          Aleatorio_PC = 'papel';
        } else if (Numeros_Aleatorios >= 2/3 && Numeros_Aleatorios <= 3/3){
          Aleatorio_PC = 'tesoura'
        }

        return Aleatorio_PC;
      }  
    </script>

  </body>


</html>
