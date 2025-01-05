const fs = require('fs');
const { program } = require('commander');

program
  .command('listar')
  .description('Lista todos os produtos cadastrados')
  .action(() => {
    fs.readFile('produtos.json', 'utf8', (err, data) => {
      if (err) {
        console.log('Erro ao ler o arquivo:', err);
        return;
      }

      const produtos = JSON.parse(data);

      if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.');
      } else {
        console.log('Produtos cadastrados:');
        produtos.forEach((produto) => {
          console.log(`ID: ${produto.id}`);
          console.log(`Nome: ${produto.nome}`);
          console.log(`Categoria: ${produto.categoria}`);
          console.log(`Estoque: ${produto.estoque}`);
          console.log(`Preço: ${produto.preco}`);
          console.log('----------------------------');
        });
      }
    });
  });
