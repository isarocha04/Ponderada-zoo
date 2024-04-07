const request = require('supertest');
const app = require('../index');

describe('Teste do endpoint /criar-animal TEM QUE PASSAR', () => {
  it('Deve retornar um código de status 200 e uma mensagem de sucesso', async () => {
    const response = await request(app)
      .post('/criar-animal')
      .send({ nome: 'Lio', especie: 'leão' });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Animal Lio criado com sucesso!');
  });
});

describe('Teste do endpoint /criar-animal TEM QUE FALHAR', () => {
  it('Deve retornar um código de status 400 e uma mensagem de erro', async () => {
    const response = await request(app)
      .post('/criar-animal')
      .send({ nome: '', especie: 'leão' });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Não é possível criar um animal sem nome!');
  });
});
