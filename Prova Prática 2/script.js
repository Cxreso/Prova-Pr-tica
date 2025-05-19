// Aguarda o carregamento completo do DOM antes de executar qualquer código
document.addEventListener('DOMContentLoaded', function () {
  const inputTarefa = document.getElementById('nova-tarefa'); // Campo de entrada de texto para nova tarefa
  const btnAdicionar = document.getElementById('btn-adicionar'); // Botão de adicionar tarefa
  const listaTarefas = document.getElementById('tarefas'); // Lista onde as tarefas serão exibidas
  const divErro = document.querySelector('.erro'); // Div onde a mensagem de erro será exibida
    function adicionarTarefa() {
    const texto = inputTarefa.value.trim(); // Remove espaços em branco do início e fim

    if (texto === '') {
      divErro.textContent = 'Por favor, digite uma tarefa.'; // Mostra a mensagem de erro
      divErro.style.display = 'block'; // Torna a div de erro visível
      return; // Interrompe a função
    }

    const li = document.createElement('li'); // Cria um elemento <li> novo
    li.innerHTML = `
      <span class="tarefa-texto">${texto}</span>  <!-- Exibe o texto da tarefa -->
      <div class="acoes">                         <!-- Div com botões de ação -->
        <button class="btn-concluir">Concluir</button>  <!-- Botão para concluir -->
        <button class="btn-remover">Remover</button>    <!-- Botão para remover -->
      </div>
    `;
    const btnConcluir = li.querySelector('.btn-concluir'); // Botão "Concluir"
    const btnRemover = li.querySelector('.btn-remover'); // Botão "Remover"
    const spanTexto = li.querySelector('.tarefa-texto'); // Texto da tarefa
    btnConcluir.addEventListener('click', function () {
      spanTexto.classList.toggle('concluida'); // Alterna a classe "concluida" (risca o texto)
    });
    btnRemover.addEventListener('click', function () {
      listaTarefas.removeChild(li); // Remove o item da lista
    });
    listaTarefas.appendChild(li); // Adiciona o <li> à lista de tarefas
    inputTarefa.value = ''; // Limpa o campo de texto
    divErro.textContent = ''; // Limpa o texto de erro
    divErro.style.display = 'none'; // Esconde a mensagem de erro
  }
  btnAdicionar.addEventListener('click', adicionarTarefa);
  inputTarefa.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
      adicionarTarefa(); // Executa a função
    }
  });
});
