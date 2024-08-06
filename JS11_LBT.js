const todo_list = []; // 1 - Cria o Array

/* OUTRA FORMA MAIS SIMPLES, porem complicada de aplicar de uma forma geral

ex: const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]


ex: 

const fruits = ['Apple', 'Banana', 'Cherry'];
const fruitString = fruits.join(', '); // "Apple, Banana, Cherry"



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
*/

function Print_Array(){
  let  Imprimir= ''; // 2 - Cria a variavel que vai receber todo array

  for (let i = 0; i <=todo_list.length; i++){ // 3 - FOR pra varrer todo array
      const Varrer_Array = todo_list[i];  // 4 - Variavel que vai receber
      if (Varrer_Array !== undefined) { // 5 - verificar se ta vazio
        const Array_Html = `<p>${Varrer_Array}</p>`; // 6 - escrever no HTML
        Imprimir = Imprimir + Array_Html; // 7 - Concatenar imprimir e Array_Html 
      }
  }
    document.querySelector('.Container_lembrete').innerHTML = Imprimir; // 8 - enfiar tudo no DIV, pois não pode paragrafo no paragrafo

}

Print_Array();


function lembrete(){
  const input = document.querySelector('.input_todo'); //input
  const user_input = input.value;                            //input

  todo_list.push(user_input);

  user_input.value = '';                // pra zerar o placeholder.

  Print_Array();

}
