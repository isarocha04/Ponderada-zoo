const request = require('supertest');
const app = require('../index');

describe('Teste do endpoint /alimentar-animal TEM QUE PASSAR', () => {
  it('Deve retornar um código de status 200 e uma mensagem de sucesso', async () => {
    const animalData = { nome: 'Lio', especie: 'leão' };
    const recintoData = { nome: 'savana' };

    await request(app).post('/criar-animal').send(animalData);

    const response = await request(app)
      .post('/alimentar-animal')
      .send({ nome: 'Lio', qto_comida: 1 });

    expect(response.statusCode).toBe(200);
  });
});
