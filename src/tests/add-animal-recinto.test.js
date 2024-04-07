const request = require('supertest');
const app = require('../index');

describe('Teste do endpoint /adicionar-animal-recinto TEM QUE FALHAR', () => {
  it('Deve retornar um código de status 400 e uma mensagem de erro', async () => {
    const response = await request(app)
      .post('/adicionar-animal-recinto')
      .send({ especie: 'leão', recinto: 'savana' });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe(
      'O recinto savana e/ou a espécie leão não existe.'
    );
  });
});

describe('Teste do endpoint /adicionar-animal-recinto TEM QUE PASSAR', () => {
  it('Deve retornar um código de status 200 e uma mensagem de sucesso', async () => {
    const animalData = { especie: 'leão', nome: 'Lio' };
    const recintoData = { nome: 'savana' };

    await request(app).post('/criar-animal').send(animalData);

    await request(app).post('/criar-recinto').send(recintoData);

    const response = await request(app)
      .post('/adicionar-animal-recinto')
      .send({ especie: 'leão', recinto: 'savana' });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'Animais da espécie leão foram alocados no recinto savana!'
    );
  });
});
