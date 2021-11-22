# Estoque App

Esse projeto tem por finalidade criar uma aplicação em Ionic capaz de
fazer a gestão de um estoque de produtos, classificados por categorias.

## Instalação
  - Baixe o arquivo ZIP do repositório ou faça um clone deste em sua máquina.
  - Escolha o package manager que irá utilizar para baixar as dependências

  - Caso esteja utilizando npm, rode o comando:
    ```sh
       npm i
    ```
    Após isso, para instalar o Ionic globalmente em sua máquina rode :
    ```sh
       npm install -g @ionic/cli
    ```
    Após isso, para executar a aplicação rode :
    ```sh
       ionic serve -c
    ```

    ***Certifique-se de que o Node e o NPM estão instalados em sua máquina.***

### Detalhes

A Aplicação foi montada com 8 telas:
  - Login
  - Home Page
  - Lista de Produtos
  - Cadastrar Novo Produto
  - Editar ou Excluir Produto
  - Lista de Categorias
  - Cadastrar Nova Categoria
  - Editar ou Excluir Categoria

Temos então, dois Modelos para o Aplicativo:
  - Produto:
    - nome
    - descrição
    - Categoria
    - preço
    - quantidade

  - Categoria
    - nome
    - descrição

As informações são salvas através do [IonicStorage](https://github.com/ionic-team/ionic-storage); esse plugin é capaz
de identificar qual é o dispositivo que está sendo usado, e salva as informações no banco de dados deste(no caso de
iOS e Android, SQLite).

Para utilizarmos os dados salvos em banco em toda a aplicação, utilizamos os [providers](https://www.joshmorony.com/when-to-use-providersservicesinjectables-in-ionic/), um conceito do Angular que "injeta" o serviço, deixando-o disponível
para que as classes que o chamam possam acessar os seus respectivos dados.

### Demonstração

Para ilustrar a utilização do aplicativo, foram tirados alguns prints, que podem ser vistos através desse [link](https://imgur.com/a/TWMqqJR).
