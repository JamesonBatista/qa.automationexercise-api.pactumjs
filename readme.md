
# Projeto de Testes Automatizados com Pactum, Mocha e Mochawesome

## Requisitos para executar o projeto

Para rodar o projeto localmente, você precisará ter as seguintes dependências instaladas:

- **Node.js** (versão 20 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passos para configurar o ambiente local:

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install
   ```

4. Para rodar os testes localmente, utilize o comando:
   ```bash
   npm test
   ```

   Isso executará os testes usando o **Mocha** e gerará um relatório com o **Mochawesome**.

### Gerar o relatório de testes localmente:

Após rodar os testes localmente, um relatório em HTML será gerado no diretório `reports`. Para visualizar o relatório:

1. Navegue até a pasta `reports`:
   ```bash
   cd reports
   ```

2. Abra o arquivo `mochawesome-report.html` no navegador para visualizar os resultados.

---

## Execução dos testes no GitHub Actions

Este projeto está configurado para ser executado automaticamente no **GitHub Actions** sempre que houver um push para a branch `main` ou quando um **pull request** for criado.

### Como funciona o CI no GitHub Actions:

1. Ao realizar um push para o repositório ou abrir um pull request, o GitHub Actions executa automaticamente os testes em um ambiente de CI.

2. Ele instala as dependências, executa os testes e gera os relatórios utilizando o **Mochawesome**.

3. Os relatórios de testes são disponibilizados como artefatos, que podem ser baixados diretamente da interface do GitHub Actions.

### Como acessar o relatório no GitHub Actions:

1. Após a execução do workflow, vá até a aba **Actions** do repositório no GitHub.
2. Selecione o workflow mais recente.
3. No final da execução, você encontrará um link para fazer download do relatório gerado como artefato (arquivo HTML).

---

## Estrutura do Projeto

- **`tests/`**: Contém os arquivos de testes automatizados.
- **`pactumConfig.js`**: Configuração global do Pactum, incluindo a base URL e hooks de requisição/resposta.
- **`package.json`**: Define os scripts e dependências do projeto.
- **`reports/`**: Diretório onde os relatórios do **Mochawesome** são gerados após os testes.

---


- **Gerar o relatório de testes**:
  O relatório será gerado automaticamente em `reports/mochawesome-report.html` após a execução dos testes.

---

## Ferramentas Utilizadas

- **Pactum**: Framework para automação de testes de API.
- **Mocha**: Test runner para JavaScript.
- **Mochawesome**: Gerador de relatórios de testes com Mocha.
- **GitHub Actions**: CI/CD para automação de execução de testes e geração de relatórios.
