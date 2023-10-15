# Ionic Test
Aplicativo modelo para as aulas de "Desenvolvimento de Aplicativos Híbridos" usando [Angular](https://angular.io/), [Ionic](https://ionicframework.com/), [Capacitor](https://capacitorjs.com/) e [Firebase](https://firebase.com).
É um *CRUD* - Create, Read, Update, Delete - para gerir o cadastro de **alguma coisa**. Também temos um formulário de contatos e outros recursos baseados no back-end fornecido pelo Firebase.com.

> Nestes passos, estamos usando o [GitHub Desktop](https://desktop.github.com) para fazer versionamento no Windows 10/11. O GitHub Desktop já deve estar instalado no computador.

Resumidamente, nesses passos, você vai fazer "fork" do repositório original, "clonar" na estação de trabalho, baixar as dependências e configurar a conexão com o Firebase.

## Preparação
 - Abra o navegador padrão e acesse o site [Firebase](https://firebase.com).
 - Logue-se com sua conta Gmail.
 - Se ainda não o fez, crie um novo projeto e, neste, um novo aplicativo Web.
 - Ative também os serviços *Authentication*, *Cloud Firestore* e *Storage*.

> Os passos para criar um projetos e o aplicativo no Firebase não serão descritos aqui. Pesquise!

## Obtendo
 - Pelo navegador, abra o site [GitHub.com](https://github.com) e logue-se na sua conta.
 - Ainda no navegador, acesse o repositório deste aplicativo [Ionic Test](https://github.com/Luferat/iontest).
 - No canto superior direito da página, localize e clique no ícone "Fork".

<p style="text-align: center"><img src="https://raw.githubusercontent.com/Luferat/MyGistImages/main/github/20230927.fork.png" alt="Fork"></p>

 - Se necessário, altere "**Repository name**" para evitar conflitos com seus repositórios atuais.
 - Clique no botão [Create Fork] para fazer a cópia do repositório para seu próprio GitHub.com.
 - Acesse o novo repositório, criado na sua conta GitHub.com.
 - Clique no botão [<> Code ▾] e em "Open with GitHub Desktop".
 - No GitHub Desktop, se necessário, altere "Local path", apontado para a pasta local onde o repositório será clonado.
 - Clique no botão [Clone] e aguarde o processo concluir.

## Configurando
Abra um "**Node.js command prompt**" e navegue até a pasta raiz do projeto clonado.

> Lembre-se que a pasta raiz de um projeto **Node** é onde está o arquivo "**package.json**" dele!!!

### Redes com SSL Self-signed
Se você está em uma rede com SSL auto assinado ou abaixo de um proxy, pode ser necessário executar os comandos abaixo antes de baixar os pacotes via `npm`:

```
npm config set strict-ssl false
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Baixando dependências

 - Comande `npm install` para obter todas as dependências.
 - Abra o projeto no **VSCode** ou em outra IDE.
 - Localize e abra o arquivo  `src\environments\environment.ts`.
 - Altere as sub chaves da chave `firebase` para os dados obtidos do seu aplicativo no [Firebase](https://firebase.com).
 - Selecione (`[Ctrl]+[A]`) e copie (`[Ctrl]+[C]`) todo o conteúdo do arquivo.
 - Localize e abra o arquivo `src\environments\environment.prod.ts`.
 - Selecione (`[Ctrl]+[A]`) e cole (`[Ctrl]+[V]`) todo o conteúdo de `src\environments\environment.ts` aqui.
 - Altere o valor da chave `production` para `true`.
 - Salve e feche todos os arquivos no VSCode.

## Testando
- De volta ao "**Node.js command prompt**", verifique se não ocorreram erros de download e/ou instalação das dependências.
- Finalmente, inicie o servidor de desenvolvimento comandando  `ionic serve`.

> Dica: para continuar o desenvolvimento do aplicativo para seus propósitos, sempre crie um novo **branch** para cada nova etapa.
