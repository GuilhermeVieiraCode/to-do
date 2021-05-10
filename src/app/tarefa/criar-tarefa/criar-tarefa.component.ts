import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/shared/services/tarefa-service.service';
//import { TarefaFirestoreService } from 'src/app/shared/services/tarefa-firestore.service';

import { Tarefa } from 'src/app/shared/models/tarefa';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.scss']
})
export class CriarTarefaComponent implements OnInit {

  tarefa : Tarefa;
  tarefasToDo! : Array<Tarefa>;
  tarefasDoing! : Array<Tarefa>;
  tarefasDone! : Array<Tarefa>;  

  constructor( private tarefaService : TarefaService) { 
    this.tarefa = new Tarefa();
    this.tarefa.todo = true;
    this.tarefa.doing = false;
    this.tarefa.done = false;
  }

  ngOnInit(): void {
    this.tarefaService.listar().subscribe({
        next: (tarefas) => this.tarefasToDo = tarefas
    });
  }

  salvarTarefa(){
      this.tarefaService.inserir(this.tarefa).subscribe({
          next: (tarefa) => {
              console.log("Sucesso", tarefa);
              this.tarefa = new Tarefa();

              this.tarefaService.listar().subscribe({
                next: (tarefas) => this.tarefasToDo = tarefas
            });
            }
      })
  } 

}
