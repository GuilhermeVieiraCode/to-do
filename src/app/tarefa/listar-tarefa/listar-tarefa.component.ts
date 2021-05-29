import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/shared/services/tarefa-service.service';
import { Tarefa } from 'src/app/shared/models/tarefa';
//import { TarefaFirestoreService } from 'src/app/shared/services/tarefa-firestore.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss'],
})

export class ListarTarefaComponent implements OnInit {
  @Input() tarefasAll!: Array<Tarefa>;
  @Input() tarefasToDo!: Array<Tarefa>;
  @Input() tarefasDoing!: Array<Tarefa>;
  @Input() tarefasDone!: Array<Tarefa>;

  constructor( private tarefaService : TarefaService ) { }

  ngOnInit(): void {}

  alterarEstado(tarefa: Tarefa): void{
    switch(tarefa.estado){
      case "todo":
        tarefa.estado = "doing";
        const indexToDo = this.tarefasToDo?.findIndex(tarefaRemover => tarefaRemover.id === tarefa.id);
        if(indexToDo > -1){
          this.tarefasToDo.splice(indexToDo, 1);
          this.tarefasDoing.unshift(tarefa);
        }
        break;
      case "doing":
        tarefa.estado = "done";
        const indexDoing = this.tarefasDoing?.findIndex(tarefaRemover => tarefaRemover.id === tarefa.id);
        if(indexDoing > -1){
          this.tarefasDoing.splice(indexDoing, 1);
          this.tarefasDone.unshift(tarefa);
        }
        break;
        case "done":
          tarefa.estado = "doing";
          const indexDone = this.tarefasDone?.findIndex(tarefaRemover => tarefaRemover.id === tarefa.id);
          if(indexDone > -1){
            this.tarefasDone.splice(indexDone, 1);
            this.tarefasDoing.unshift(tarefa);
          }
          break;    
    }
    this.tarefaService.atualizar(tarefa).subscribe({
      next: () => console.log("Tarefa atualizada:", tarefa)
    })
  }

  estadoInicial(tarefa: Tarefa): void {
    tarefa.estado = "todo";
    const indexDoing = this.tarefasDoing?.findIndex(tarefaRemover => tarefaRemover.id === tarefa.id);
    if(indexDoing > -1){
      this.tarefasDoing.splice(indexDoing, 1);
      this.tarefasToDo.unshift(tarefa);
    }
      this.tarefaService.atualizar(tarefa).subscribe({
        next: () => console.log("Tarefa atualizada:", tarefa)
    })  
  }

  removerTarefa(id: number, estado: string): void{
    this.tarefaService.remover(id).subscribe({
      next: () => {
          switch(estado){
            case "todo":
              const indexToDo = this.tarefasToDo?.findIndex(tarefa => tarefa.id === id);
              if(indexToDo > -1){
                this.tarefasToDo.splice(indexToDo, 1);
              }
              break
            case "doing":
                const indexDoing = this.tarefasDoing?.findIndex(tarefa => tarefa.id === id);
                if(indexDoing > -1){
                  this.tarefasDoing.splice(indexDoing, 1);
              }
              break
            case "done":
              const indexDone = this.tarefasDone?.findIndex(tarefa => tarefa.id === id);
              if(indexDone > -1){
                this.tarefasDone.splice(indexDone, 1);
              }
              break      
          }
          
          const index = this.tarefasAll?.findIndex(tarefa => tarefa.id === id);
          if(index > -1){
              this.tarefasAll.splice(index, 1);
          }
        }
    })
  }  
}            
