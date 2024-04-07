# Ponderada-zoo

Resolução da atividade ponderada na aula de Engenharia de Software.

## Descrição

Essa API oferece os seguintes endpoints para realizar as seguintes operações:

- `POST /criar-animal`: Cria um novo animal no zoológico.
- `POST /criar-recinto`: Cria um novo recinto no zoológico.
- `POST /adicionar-animal-recinto`: Aloca animais da mesma espécie em recintos existentes.
- `POST /alimentar-animal`: Alimenta um animal e afeta seu nível de felicidade.
- `GET /receber-visitantes`: Registra visitantes no zoológico.
- `GET /mostrar-animais`: Retorna a lista de animais no zoológico.
- `GET /mostrar-recintos`: Retorna a lista de recintos no zoológico.

## Requisitos

- Node.js
- NPM
- Jest
- Express
- Body-parser

Para instalar as dependencias do projeto basta executar o seguinte comando dentro da pasta src:

```bash
npm install
```

## Como executar

Para executar a API basta navegar até a pasta src e executar o seguinte comando:

```bash
node index.js
```

Para executar os testes basta navegar até a pasta src/tests e executar o seguinte comando:

```bash
npx jest
```
