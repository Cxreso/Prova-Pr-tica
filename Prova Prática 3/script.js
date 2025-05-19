document.addEventListener('DOMContentLoaded', function () {
  // Espera o carregamento completo do conteúdo HTML antes de executar o código

  const valorContador = document.getElementById('valor-contador'); // Seleciona o elemento que exibe o valor do contador
  const btnIncrementar = document.getElementById('incrementar-btn'); // Seleciona o botão de incrementar
  const btnDecrementar = document.getElementById('decrementar-btn'); // Seleciona o botão de decrementar
  const btnResetar = document.getElementById('resetar-btn');         // Seleciona o botão de resetar

  let contador = 0; // Inicializa a variável do contador com zero

  function atualizarContador() {
    // Função para atualizar o texto do contador na tela
    valorContador.textContent = contador;
  }

  btnIncrementar.addEventListener('click', function () {
    // Adiciona um evento que aumenta o contador ao clicar no botão incrementar
    contador++;
    atualizarContador(); // Atualiza a exibição do valor na página
  });

  btnDecrementar.addEventListener('click', function () {
    // Adiciona um evento que diminui o contador ao clicar no botão decrementar
    contador--;
    atualizarContador(); // Atualiza a exibição do valor na página
  });

  btnResetar.addEventListener('click', function () {
    // Adiciona um evento que reseta o contador para zero ao clicar no botão resetar
    contador = 0;
    atualizarContador(); // Atualiza a exibição do valor na página
  });

  // Inicializa o contador na tela com o valor zero ao carregar a página
  atualizarContador();
});
