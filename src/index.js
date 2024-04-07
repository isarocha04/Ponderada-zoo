const Animal = require('./Animal');
const Recinto = require('./Recinto');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 0;

app.use(bodyParser.json());

let animais = [];
let recintos = [];
let qtdVisitantes = 0;
app.post('/criar-animal', (req, res) => {
  if (req.body.nome == '' || req.body.nome == undefined) {
    res.status(400).send('Não é possível criar um animal sem nome!');
  }
  let animal = new Animal(req.body.nome, req.body.especie);
  animais.push(animal);
  res.send(`Animal ${req.body.nome} criado com sucesso!`);
});

app.post('/criar-recinto', (req, res) => {
  if (req.body.nome == '' || req.body.nome == undefined) {
    res.status(400).send('Não é possível criar um recinto sem nome!');
  }
  let recinto = new Recinto(req.body.nome);
  recintos.push(recinto);
  res.send(`Recinto ${req.body.nome} criado com sucesso!`);
});

app.post('/adicionar-animal-recinto', (req, res) => {
  let recintosExistentes = [];
  let especiesExistentes = [];
  let especie = req.body.especie;
  let recinto = req.body.recinto;

  recintos.forEach((element) => {
    recintosExistentes.push(element.nome);
  });

  animais.forEach((element) => {
    especiesExistentes.push(element.especie);
  });

  if (
    recintosExistentes.includes(recinto) &&
    especiesExistentes.includes(especie)
  ) {
    animais.forEach((element) => {
      if (element.especie === especie) {
        element.atribuirRecinto(recinto);
      }
    });
    res.send(
      `Animais da espécie ${especie} foram alocados no recinto ${recinto}!`
    );
  } else {
    res
      .status(400)
      .send(`O recinto ${recinto} e/ou a espécie ${especie} não existe.`);
  }
});

app.post('/alimentar-animal', (req, res) => {
  let nomeAnimal = req.body.nome;
  let qtd_comida = req.body.qtd_comida;
  animais.forEach((element) => {
    if (element.nome === nomeAnimal) {
      element.alimentar(qtd_comida);
      res.send(
        `Animal ${nomeAnimal} alimentado com sucesso, o nível de felicidade foi aumentado em ${qtd_comida}!`
      );
    }
    res
      .status(400)
      .send('Não existe animal com esse nome para ser alimentado!');
  });
});

app.get('/receber-visitantes', (req, res) => {
  qtdVisitantes++;
  res.send(`O zoológico recebeu ${qtdVisitantes} visita(s)`);
});

app.get('/mostrar-animais', (req, res) => {
  res.send(animais);
});

app.get('/mostrar-recintos', (req, res) => {
  res.send(recintos);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
