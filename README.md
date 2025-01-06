
<div align="center">
<h1>AgilStore<h1>
</div>

A API é construída com Node.js na versão 20, permite interação com inventário da loja de tecnologia, salvando os dados em arquivo "produtos.json", os comando são usando na interface do terminal
## Dependências do projeto:

- commander
- uuid
- readline (biblioteca nativa do node não precisa instalar)

### Comandos:

Todos os comandos vai acompanhado com node cli.js nomedocomando, as vezes pode incluir um parâmentro obrigatório na frente.

#### Help
Retorna uma listar com todos os comando disponível
 
#### Listar
Lista todos os dados dos produtos em uma lista

#### Exemplo
```
node cli.js listar

RETORNO: retorna uma listar de publicação no console do terminal

```
#### adicionar
Permite o usuário adicionar o produtor com toda sua descrisão e categoria etc.

#### Exemplo
```
node cli.js adicionar

RETORNO: Permite inputs como:

 Nome do Produto
 Categoria
 Quantidade em estoque
 Preço
```

#### buscar
permite que busque o produto pelo o id ou pelo o primeiro nome do produto, no caso "roupas de festas", não é possivel inserir o nome completo mais o primeiro nome, roupas

#### Exemplo
```
node cli.js buscar roupas

RETORNO: retorna uma lista com todos os nomes:

 Roupas de festa
 Roupas de casamentos
 Roupas de praia
```
#### Remover
Permiter remover um elemento pelo id 

<img align="center" alt="acao_bloco_de_nota" src="https://github.com/Evanilsondejesus/galeria/blob/main/img/cli_imagem.png" /> 
 
#### Exemplo
```
node cli.js remover exemplodeId_12344

RETORNO: excluir o dados que corresponde ao id, com uma mensagem:
 "Produto removido com sucesso !"! caso já tenha sido excluido "Produto não encontrado !"
```

#### Atualizar
Permiter atualizar um elemento pelo id

#### Exemplo
```
node cli.js atualizar exemplodeId_12344

RETORNO: inputs para o usúario atualizar produto:
 "Produto removido com sucesso !"! caso já tenha sido excluido ou não exista "Produto não encontrado !"
```
 
























