Lista_Lembrete = JSON.parse(localStorage.getItem('lembretes')) || [];
//   target      //refaz            //prepara     //nome        //array


function Imprimir_Lembrete(){ // 1 onde sai o print
  const DIV = document.querySelector('.imprimir_lembrete');    // 2          //2
  DIV.innerHTML = Lista_Lembrete.map((html, i) => `<p>${html.Input_Usuario} | ${html.Data_Usuario} <button class="BTN_ESP" onclick="Deletar_Lembrete(${i})">Deletar</button> </p>`).
  join('');                               //4                    

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
