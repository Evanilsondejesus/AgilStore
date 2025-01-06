const fs = require('fs');
const { program } = require('commander');

program
  .command('buscar <termo>')
  .description('Busca um produto pelo ID ou parte do nome')
  .action((termo) => {
    fs.readFile('produtos.json', 'utf8', (err, data) => {
      if (err) {
        console.log('Erro ao ler o arquivo:', err);
        return;
      }

      const produtos = JSON.parse(data);

      // Filtra os produtos que correspondem ao ID ou que têm o termo no nome
      const produtosEncontrados = produtos.filter((produto) => {
        return produto.id === termo || produto.nome.toLowerCase().includes(termo.toLowerCase());
      });

      if (produtosEncontrados.length === 0) {
        console.log('Nenhum produto encontrado com o termo:', termo);
      } else {
        console.log('Produto(s) encontrado(s):');
        produtosEncontrados.forEach((produto) => {
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
