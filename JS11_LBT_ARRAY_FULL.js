Lista_Lembrete = JSON.parse(localStorage.getItem('lembretes')) || [];
//   target      //refaz            //prepara     //nome        //array


function Imprimir_Lembrete(){ // 1 onde sai o print
  const DIV = document.querySelector('.imprimir_lembrete'); //pegou class DIV
  DIV.innerHTML = Lista_Lembrete.map((html, i) => 
  `<p>${html.Input_Usuario} | ${html.Data_Usuario} 
  <button class="BTN_ESP" onclick="Deletar_Lembrete(${i})"> Deletar </button> 
  </p>`).
  join('');                                     

}


function Adicionar_Lembrete(){ // 2 botão de adicionar 
  const input = document.querySelector('.LEMBRETE');
  const data = document.querySelector('.DATA');
  let Input_Usuario = input.value; // 2
  let Data_Usuario = data.value; // 2

  Lista_Lembrete.push({Input_Usuario, Data_Usuario}); // 2

  LOCALSTORAGE(); // sempre atualiza os valores que estavam la 

  input.value = '';
  data.value = '';

  Imprimir_Lembrete();
}

function Resetar_Lembrete(){ // 3  resetar todo o lembrete
  Lista_Lembrete = [];
  LOCALSTORAGE();
  Imprimir_Lembrete();
}

function Deletar_Lembrete(index){ // 4 - O valor 1 ali é pra apagar só 1 por vez
  Lista_Lembrete.splice(index, 1);
  LOCALSTORAGE();
  Imprimir_Lembrete();
}

// 5 - vamos salvar no local storage, passo a passo.
function LOCALSTORAGE(){
  //         prepara       nome                       target
localStorage.setItem('lembretes', JSON.stringify(Lista_Lembrete));
}

Imprimir_Lembrete();


/* metodo normal para imprimir array na DIV onde cada uma é um paragrafo <p>
e COMO náo pode dar print das array dentro de um paragrafo, ou seja, "<p> aqui esta os paragrafo.. e aqui esta <p> os arrays</p></p>" ou seja, isso não pode, é melhor botar tudo na DIV pois dessa forma, você consegue organizar melhor

map permite transformar cada item do array Lista_Lembrete em uma string HTML correspondente, contendo o texto do lembrete e um botão de deletar e join('') combina essas strings em uma única string, que é então atribuída à propriedade innerHTML da <div>, resultando na exibição de todos os lembretes.
então implesmente atualiza o conteúdo da <div>. Isso evita a necessidade de recriar ou manipular individualmente cada elemento no DOM.

<div class="imprimir_lembrete"></div>

function Print_Array(){
  const container = document.querySelector('.Container_lembrete');
  container.innerHTML = todo_list.map(html => `<p>${html}</p>`).join('');
}


function lembrete(){
  const input = document.querySelector('.input_todo');
  input_usuario = input.value;

  todo_list.push(input_usuario);

  Print_Array();
  input_usuario = '';
}

..........................................................................

outra versão completa para apagar os array

function Imprimir_Lembrete(){ 
  const DIV = document.querySelector('.imprimir_lembrete'); //pegou class DIV
  DIV.innerHTML = Lista_Lembrete.map((html, i) => 
  `<p>${html.Input_Usuario} | ${html.Data_Usuario} 
  <button class="BTN_ESP" onclick="Deletar_Lembrete(${i})"> Deletar </button> 
  </p>`).
  join('');               

}

      .BTN_ESP{
        margin-left: 430px;
        background-color: red;
      }


function Deletar_Lembrete(index){ // 4 - O valor 1 ali é pra apagar só 1 por vez
  Lista_Lembrete.splice(index, 1);
  LOCALSTORAGE();
  Imprimir_Lembrete();
}

aqui, "i" é para o index, e fiz um botão dentro da propria DIV, para apagar os array, dessa forma utilizando onclick e function, posso apagar eles la dentro mesmo, onde i é index, 1 para apenas um array por vez.


{html.Input_Usuario} | ${html.Data_Usuario} são dois argumentos agora, Lista_Lembrete.push({Input_Usuario, Data_Usuario});
input do lembrete e outro da data marcada, portanto, precisa de dois.



*/
