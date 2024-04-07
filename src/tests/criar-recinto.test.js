const request = require('supertest');
const app = require('../index');

describe('Teste do endpoint /criar-recinto TEM QUE PASSAR', () => {
  it('Deve retornar um código de status 200 e uma mensagem de sucesso', async () => {
    const response = await request(app)
      .post('/criar-recinto')
      .send({ nome: 'savana' });

    expect(response.statusCode).toBe(200);
  });
});

describe('Teste do endpoint /criar-recinto TEM QUE FALHAR', () => {
  it('Deve retornar um código de status 400 e uma mensagem de erro', async () => {
    const response = await request(app)
      .post('/criar-recinto')
      .send({ nome: '' });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Não é possível criar um recinto sem nome!');
  });
});
