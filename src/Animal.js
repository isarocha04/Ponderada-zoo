class Animal {
  constructor(nome, especie, nivel_felicidade, recinto) {
    this.nome = nome;
    this.especie = especie;
    this.nivel_felicidade = 0;
    this.recinto = null;
  }
  atribuirRecinto(recinto) {
    this.recinto = recinto;
  }
  alimentar(qtdComida) {
    this.nivel_felicidade += qtdComida;
  }
}

module.exports = Animal;
