import { Component, Input, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/shared/services/tarefa-service.service';
import { Tarefa } from 'src/app/shared/models/tarefa';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.scss']
})
export class CriarTarefaComponent implements OnInit {

  tarefa : Tarefa;
  tarefasCriar! : Array<Tarefa>;  

  constructor( private tarefaService : TarefaService) { 
    this.tarefa = new Tarefa();
  }

  ngOnInit(): void {
    this.tarefaService.listar().subscribe({
        next: (tarefas) => this.tarefasCriar = tarefas
    });
  }

  salvarTarefa(){
      this.tarefaService.inserir(this.tarefa).subscribe({
          next: (tarefa) => {
              console.log("Sucesso", tarefa);
              this.tarefa = new Tarefa();

              this.tarefaService.listar().subscribe({
                next: (tarefas) => this.tarefasCriar = tarefas
            });
            }
      })
  } 

}
