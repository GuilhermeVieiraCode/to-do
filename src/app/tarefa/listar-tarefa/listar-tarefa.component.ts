import { Component, Input, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/shared/services/tarefa-service.service';
import { Tarefa } from 'src/app/shared/models/tarefa';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  @Input() tarefas!: Array<Tarefa>

  constructor( private tarefaService : TarefaService ) { }

  ngOnInit(): void {}

  removerTarefa(tarefa: Tarefa){
      this.tarefaService.remover(tarefa.id).subscribe({
        next: () => {
            const index = this.tarefas.indexOf(tarefa);
            if(index > -1){
                this.tarefas.splice(index, 1);
            }
        }
    })
 }
}            
