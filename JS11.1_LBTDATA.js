Lista_Lembrete = []


function Imprimir_Array(){
  const container = document.querySelector('.div_lembrete'); // 1
  container.innerHTML = Lista_Lembrete.map((html, i) => `<p>${html.User_Input} 
  (${html.Data_Input}) 
   <button onclick=" Remover_Index(${i});"> deletar </button>
   <p>
    `).join(''); // 2
  // puta que pariu, isso aqui é complicado pra um caralho
  // 1 - pega a classe do DIV
  /* 2 - Mapei as variaveis que vai usar, Html para array e i para Remover_Index(${i}), cria o HTML dentro disso, depois cria o botão de apagar e faz a logica utilizando Lista_Lembrete.splice(index, 1); dessa forma, apaga de um por um ao inves de tudo, depois imprime com innerHTML tudo na class do DIV*/
  /* 3 - outra coisa, agora que foi adicionado o calendario, e fizemos a mudança no 
  Lista_Lembrete.push({User_Input, Data_Input});, portanto, adicionamos mais uma variavel, é importante lembrar que são dois objetos, então, fica 
  <p>${html.User_Input} (${html.Data_Input}), se FOSSE apenas o html, então não precisa de adicionar <p>${html.User_Input} o User_Input aqui, ficaria apenas 
  <p>${html}, mas como tem dois agora, fica assim  <p>${html.User_Input} 
  (${html.Data_Input})*/
}


function ADD_Lembrete(){  // adiciona
  const input = document.querySelector('.input_lembrete'); // pega class do input
  const data = document.querySelector('.input_data');
  let User_Input = input.value; // adiciona numa variavel o valor da string
  let Data_Input = data.value;

  Lista_Lembrete.push({User_Input, Data_Input});  // adiciona no array usando push o input

  input.value ='';                  // limpa o input, pegar o value e não a variavel
  data.value = '';

  Imprimir_Array();             // imprime no div o array

}

function RESET_Lembrete(){  // aqui apaga tudo 
  const input = document.querySelector('.input_lembrete');
  let User_Input = input.value;

  Lista_Lembrete.splice(User_Input);

  User_Input='';

  Imprimir_Array();

  /* outra forma de fazer
  Lista_Lembrete = []
  Imprimir_Array(); 
  */

}

function DEL_Lembrete(){  // apagar 1 por 1 mas de outra forma
  Lista_Lembrete.pop();
  Imprimir_Array()
}

function Remover_Index(index){ // usado dentro do InnerHTML do DIV
  Lista_Lembrete.splice(index, 1); // apagar 1 por 1
  Imprimir_Array();
}






/* APENAS O LEMBRETE
passar depois para salvar
function lista_localstorage(){
  // JSON.parse(localStorage.getItem('lembretes')) || [];
  localStorage.setItem('lembretes', JSON.stringify(Lista_Lembrete)); // 1
}


function Imprimir_Array(){
  const container = document.querySelector('.div_lembrete'); // 1
  container.innerHTML = Lista_Lembrete.map((html, i) => `<p>${html} 
   <button onclick=" Remover_Index(${i});"> deletar </button>
   <p>
    `).join(''); // 2
  // puta que pariu, isso aqui é complicado pra um caralho
  // 1 - pega a classe do DIV
  // 2 - Mapei as variaveis que vai usar, cria o HTML dentro disso, depois cria
  // botão de apagar e faz a logica utilizando Lista_Lembrete.splice(index, 1);
  //dessa forma, apaga de um por um ao inves de tudo, depois imprime com innerHTML
  //tudo na class do DIV
}

function ADD_Lembrete(){  // adiciona
  const input = document.querySelector('.input_lembrete'); // pega class do input
  let User_Input = input.value; // adiciona numa variavel o valor da string

  Lista_Lembrete.push(User_Input);  // adiciona no array usando push o input

  input.value ='';                  // limpa o input, pegar o value e não a variavel

  Imprimir_Array();             // imprime no div o array

}

function RESET_Lembrete(){  // aqui apaga tudo 
  const input = document.querySelector('.input_lembrete');
  let User_Input = input.value;

  Lista_Lembrete.splice(User_Input);

  User_Input='';

  Imprimir_Array();

  //outra forma de fazer
  //Lista_Lembrete = []
  //Imprimir_Array(); 
  

}

function DEL_Lembrete(){  // apagar 1 por 1 mas de outra forma
  Lista_Lembrete.pop();
  Imprimir_Array()
}
