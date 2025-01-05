const { program } = require('commander');

program
  .command('help')
  .description('Ajudar com todos os comandos disponíveis')

  .action(() => {
    console.log('Comandos disponíveis:');
    console.log('  listar - Lista todos os produtos cadastrados');
    console.log('  buscar - Busca um produto pelo ID');
    console.log('  adicionar - Adiciona um novo produto');
    console.log('  remover - Remove um produto pelo ID');
    console.log('  atualizar - Atualiza um produto pelo ID');


  });
