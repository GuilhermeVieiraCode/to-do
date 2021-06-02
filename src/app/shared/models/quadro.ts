import { Tarefa } from "./tarefa";

export class Quadro{
  id?: string;
  descricao?: string;
  tarefas?: Array<Tarefa>

  constructor(id?: string, quadro: Quadro = {}) {
    this.id = id;
    this.descricao = quadro.descricao;
    this.tarefas = quadro.tarefas;
  }
}