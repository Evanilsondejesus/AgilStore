const fs = require('fs');
const { program } = require('commander');
const rl = require('../readline');
 
 
     
     


  program
           .command('atualizar <id>')
           .description('Atualiza os dados de um produto pelo ID')
           .action((id) => {
             fs.readFile('produtos.json', 'utf8', (err, data) => {
               if (err) {
                 console.log('Erro ao ler o arquivo:', err);
                 return;
               }
         
               const produtos = JSON.parse(data);
               const produtoIndex = produtos.findIndex(produto => produto.id === id);
         
               if (produtoIndex === -1) {
                 console.log('Produto não encontrado!');
                 rl.close();
                 return;
               }
         
               const produto = produtos[produtoIndex];
         
               console.log(`Produto encontrado:`);
               console.log(`ID: ${produto.id}`);
               console.log(`Nome: ${produto.nome}`);
               console.log(`Categoria: ${produto.categoria}`);
               console.log(`Estoque: ${produto.estoque}`);
               console.log(`Preço: ${produto.preco}`);
               console.log('----------------------------');
         
               // Solicita novos dados para o produto
               rl.question(`Novo Nome (atual: ${produto.nome}): `, (nome) => {
                 if (nome) produto.nome = nome;
         
                 rl.question(`Nova Categoria (atual: ${produto.categoria}): `, (categoria) => {
                   if (categoria) produto.categoria = categoria;
         
                   rl.question(`Nova Quantidade em Estoque (atual: ${produto.estoque}): `, (estoque) => {
                     if (estoque) produto.estoque = parseInt(estoque, 10);
         
                     rl.question(`Novo Preço (atual: ${produto.preco}): `, (preco) => {
                       if (preco) produto.preco = parseFloat(preco);
         
                       // Atualiza o arquivo com os dados modificados
                       fs.writeFile('produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                         if (err) {
                           console.log('Erro ao salvar os dados:', err);
                         } else {
                           console.log('Produto atualizado com sucesso!');
                         }
         
                         rl.close();
                       });
                     });
                   });
                 });
               });
             });
           });