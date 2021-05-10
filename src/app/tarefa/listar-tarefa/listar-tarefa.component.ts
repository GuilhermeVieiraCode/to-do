import { Component, Input, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/shared/services/tarefa-service.service';
import { Tarefa } from 'src/app/shared/models/tarefa';
//import { TarefaFirestoreService } from 'src/app/shared/services/tarefa-firestore.service';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  @Input() listaTarefas!: Array<Tarefa>

  constructor( private tarefaService : TarefaService ) { }

  ngOnInit(): void {}

  removerTarefa(id: string){
    this.tarefaService.remover(id).subscribe({
      next: () => {
          const index = this.listaTarefas.findIndex(tarefa => tarefa.id === id);
          if(index > -1){
              this.listaTarefas.splice(index, 1);
          }
      }
  })
 }
}            
