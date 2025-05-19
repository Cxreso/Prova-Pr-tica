// Aguarda o carregamento completo do DOM para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o campo de input onde o usuário digita o valor a ser convertido
  const valorInput = document.getElementById('valor');

  // Seleciona o select da moeda de origem
  const moedaOrigem = document.getElementById('moeda-origem');

  // Seleciona o select da moeda de destino
  const moedaDestino = document.getElementById('moeda-destino');

  // Elemento onde o resultado da conversão será exibido
  const resultadoDiv = document.getElementById('resultado');

  // Elemento onde mensagens de erro serão exibidas
  const erroMensagem = document.getElementById('erro-mensagem');

  // Botão que dispara a conversão quando clicado
  const botaoConverter = document.getElementById('converter');

  // Objeto que armazena as taxas de câmbio entre pares de moedas
  const taxas = {
    'BRL-USD': 0.19,  // Real para Dólar
    'USD-BRL': 5.26,  // Dólar para Real
    'BRL-EUR': 0.18,  // Real para Euro
    'EUR-BRL': 5.56,  // Euro para Real
    'USD-EUR': 0.94,  // Dólar para Euro
    'EUR-USD': 1.06   // Euro para Dólar
  };

  // Adiciona um evento para quando o botão for clicado
  botaoConverter.addEventListener('click', () => {
    // Converte o valor digitado para número decimal
    const valor = parseFloat(valorInput.value);

    // Pega as moedas selecionadas nos selects
    const origem = moedaOrigem.value;
    const destino = moedaDestino.value;

    // Limpa o resultado e a mensagem de erro antes de uma nova conversão
    resultadoDiv.textContent = '';
    erroMensagem.textContent = '';

    // Verifica se o valor digitado é inválido (não é número ou é menor ou igual a zero)
    if (isNaN(valor) || valor <= 0) {
      erroMensagem.textContent = 'Por favor, digite um valor válido.'; // Mostra mensagem de erro
      return; // Para a execução
    }

    // Verifica se a moeda de origem e destino são iguais
    if (origem === destino) {
      erroMensagem.textContent = 'Escolha moedas diferentes para conversão.'; // Erro para mesma moeda
      return; // Para a execução
    }

    // Monta a chave para buscar a taxa de câmbio correta, no formato "ORIGEM-DESTINO"
    const chave = `${origem}-${destino}`;

    // Busca a taxa de câmbio no objeto taxas
    const taxa = taxas[chave];

    // Se existir a taxa de câmbio para o par selecionado
    if (taxa) {
      // Calcula o valor convertido e arredonda para 2 casas decimais
      const convertido = (valor * taxa).toFixed(2);

      // Exibe o resultado da conversão formatado
      resultadoDiv.textContent = `${valor} ${origem} = ${convertido} ${destino}`;
    } else {
      // Se a taxa não existir para o par selecionado, exibe uma mensagem de erro
      erroMensagem.textContent = 'Conversão não disponível para essas moedas.';
    }
  });
});


