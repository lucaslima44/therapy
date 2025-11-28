
### 💻 Tecnologias Utilizadas

O projeto é construído utilizando um *stack* moderno e eficiente para desenvolvimento mobile:

  * **Frontend:**
      * **React Native (com Expo):** Permite o desenvolvimento rápido e a compilação simplificada para Android e iOS a partir de um único código-fonte em **JavaScript**.
      * **JavaScript:** Linguagem principal utilizada para o desenvolvimento do aplicativo.
  * **Backend & Banco de Dados:**
      * **API RESTful:** O projeto se comunica com um backend por meio de uma API para gerenciar dados de usuários, sessões e conteúdo.
      * **MongoDB:** Utilizado como o banco de dados principal, oferecendo escalabilidade e flexibilidade para lidar com dados de perfis e sessões.

-----

### 🚀 Começando

Siga os passos abaixo para clonar o projeto e configurá-lo em sua máquina local.

#### 1\. Pré-requisitos

Certifique-se de ter o **Node.js** e o **Expo CLI** instalados globalmente.

```bash
# Instalar o Expo CLI (se ainda não tiver)
npm install -g expo-cli

# Instalar o Node.js

```

#### 2\. Instalação das Dependências

Clone o repositório, faça o *checkout* para a branch `feature/tela-home` e instale todas as dependências do projeto:

```bash
# Clone o repositório
git clone https://github.com/lucaslima44/therapy.git

# Navegue até a pasta do projeto
cd therapy

# Faça checkout para a branch principal de desenvolvimento
git checkout feature/tela-home

# Instale as dependências (React Native, Expo e bibliotecas auxiliares)
npm install
```

#### 3\. Configuração da API

A URL base da sua API está configurada em um arquivo de variáveis de ambiente (`.env`).

  * Crie um arquivo na raiz do pasta therapy-api chamado **`.env`**.

  * Adicione a variável de ambiente necessária, apontando para o endereço da sua API:

    ```
    MONGO_URI=mongodb+srv://davimonteiroj06_db_user:<senha>@cluster0.u2pxxko.mongodb.net/therapy
    PORT=3000
    
    Senha (colocar no lugar de <senha>): Davizik3%40
    ```

    > ⚠️ **IMPORTANTE:** O seu código React Native/Expo deve estar configurado para carregar essa variável de ambiente.

#### 4\. Executando o Aplicativo

Após a instalação e configuração da API, você pode iniciar o projeto:

```bash
# Inicia o servidor de desenvolvimento do Expo
npm start
```

-----
