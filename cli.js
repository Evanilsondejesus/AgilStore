const { program } = require('commander');

// Importa os comandos de outros 
require('./comandos/help');
require('./comandos/adicionar');
require('./comandos/listar');
require('./comandos/buscar');
require('./comandos/remover');
require('./comandos/atualizar');




// Define a versão e a descrição do CLI
program
  .version('1.0.0')
  .description('Exemplo de CLI para gerenciamento de produtos no terminal');

// Parse para processar os argumentos passados ao programa
program.parse(process.argv);
