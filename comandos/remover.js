const fs = require('fs');
const { program } = require('commander');
const rl = require('../readline');

 
 program
           .command('remover <id>')
           .description('Remove um produto pelo ID')
           .action((id) => {
             fs.readFile('produtos.json', 'utf8', (err, data) => {
               if (err) {
                 console.log('Erro ao ler o arquivo:', err);
                 return;
               }
         
               let produtos = JSON.parse(data);
               const produtoIndex = produtos.findIndex(produto => produto.id === id);
         
               if (produtoIndex === -1) {
                 console.log('Produto não encontrado!');
                 rl.close();
                 return;
               }
         
               // Remove o produto encontrado
               produtos.splice(produtoIndex, 1);
         
               // Atualiza o arquivo removendo o produto
               fs.writeFile('produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                 if (err) {
                   console.log('Erro ao salvar os dados:', err);
                 } else {
                   console.log('Produto removido com sucesso!');
                 }
         
                 rl.close();
               });
             });
           });