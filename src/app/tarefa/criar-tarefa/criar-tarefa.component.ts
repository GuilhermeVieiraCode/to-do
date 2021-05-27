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
  tarefasAll!: Array<Tarefa>;
  tarefasToDo! : Array<Tarefa>;
  tarefasDoing! : Array<Tarefa>;
  tarefasDone! : Array<Tarefa>;  

  constructor( private tarefaService : TarefaService) { 
    this.tarefa = new Tarefa();
    this.tarefa.estado = "todo";
  }

  ngOnInit(): void {
    this.tarefaService.listar().subscribe({
        next: (tarefas) => {
          this.tarefasAll = tarefas;
          this.organizarTarefas(this.tarefasAll)
      }
    })

  }

  organizarTarefas(tarefas : Array<Tarefa>): void{
    this.tarefasToDo = [];
    this.tarefasDoing = [];
    this.tarefasDone = [];
    
    tarefas.map(tarefa => {
      switch(tarefa.estado){
        case "todo":
          this.tarefasToDo.unshift(tarefa);
          break;
        case "doing":
          this.tarefasDoing.unshift(tarefa);
          break;
        case "done":
          this.tarefasDone.unshift(tarefa);
          break;  
      }
    }) 
  }

  salvarTarefa(): void{
      this.tarefaService.inserir(this.tarefa).subscribe({
          next: (tarefa) => {
              console.log("Sucesso", tarefa);
              this.tarefa = new Tarefa();
              this.tarefa.estado = "todo";

              this.tarefaService.listar().subscribe({
                next: (tarefas) => {
                  this.tarefasAll = tarefas;
                  this.organizarTarefas(this.tarefasAll)
                }
            });
            }
       })  
  } 

}
