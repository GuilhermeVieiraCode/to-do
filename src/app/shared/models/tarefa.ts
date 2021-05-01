export class Tarefa{
    id?: string;
    descricao?: string;

    constructor(id?: string, tarefa: Tarefa = {}) {
      this.id = id;
      this.descricao = tarefa.descricao;
    }
   
}