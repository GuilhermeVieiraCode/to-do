import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { Tarefa } from 'src/app/shared/models/tarefa';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  tarefasToDo! : Array<Tarefa>;  

  constructor( private tarefaService : TarefaService ) { }

  ngOnInit(): void {
      this.tarefaService.listarToDo().subscribe({
        next: toDo => this.tarefasToDo = toDo
      });
  }

}
