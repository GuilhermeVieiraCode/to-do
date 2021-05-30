export class Tarefa{
    id?: string;
    descricao?: string;
    estado?: string;

    constructor(id?: string, tarefa: Tarefa = {}) {
      this.id = id;
      this.descricao = tarefa.descricao;
      this.estado = tarefa.estado;
    }
}