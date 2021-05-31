export class Tarefa{
    id?: string;
    descricao?: string;
    estado?: string;
    datetime?: Date;

    constructor(id?: string, tarefa: Tarefa = {}) {
      this.id = id;
      this.descricao = tarefa.descricao;
      this.estado = tarefa.estado;
      this.datetime = tarefa.datetime;
    }
}