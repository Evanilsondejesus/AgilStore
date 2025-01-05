
const rl = require('../readline');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // gerar id único
const { program } = require('commander');
 
program
  .command('adicionar')
  .description('Adiciona um novo produto')
  .action(() => {
    rl.question('Nome do Produto ? ', (nome) => {
      console.log(`- ${nome}`);

      rl.question('Categoria ? ', (categoria) => {
        console.log(`- ${categoria}`);

        rl.question('Quantidade em Estoque ? ', (estoque) => {
          console.log(`- ${estoque}`);

          rl.question('Preço ? ', (preco) => {
            console.log(`- ${preco}`);

            // Cria um objeto com os dados fornecidos
            const produto = {
              id: uuidv4(),  // Gera um ID único
              nome: nome,
              categoria: categoria,
              estoque: parseInt(estoque, 10),
              preco: parseFloat(preco)
            };

            // Salva os dados no arquivo 'produtos.json'
            fs.readFile('produtos.json', 'utf8', (err, data) => {
              let produtos = [];

              if (!err && data) {
                // Se o arquivo já existir, faz o parse dos dados
                produtos = JSON.parse(data);
              }

              // Adiciona o novo produto à lista
              produtos.push(produto);

              // Escreve os dados atualizados no arquivo
              fs.writeFile('produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                if (err) {
                  console.log('Erro ao salvar os dados:', err);
                } else {
                  console.log('Produto salvo com sucesso!');
                }

                // Fecha a interface de leitura
                rl.close();
              });
            });
          });
        });
      });
    });
  });
