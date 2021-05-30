export class Quadro{
  id?: string;
  descricao?: string;

  constructor(id?: string, quadro: Quadro = {}) {
    this.id = id;
    this.descricao = quadro.descricao;
  }
}