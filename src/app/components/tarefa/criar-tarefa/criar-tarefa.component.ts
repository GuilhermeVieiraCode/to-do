import { Component, OnInit } from '@angular/core';
import { TarefaFirestoreService } from 'src/app/shared/services/tarefa-firestore.service';
import { Tarefa } from 'src/app/shared/models/tarefa';
import { ActivatedRoute, Router } from '@angular/router';
// import { TarefaService } from 'src/app/shared/services/tarefa-service.service';

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
  
  cadastroOp = true;

  constructor( private tarefaService : TarefaFirestoreService,
               private rotaAtual :  ActivatedRoute,
               private roteador : Router) { 
    
    this.tarefa = new Tarefa();
    
    if(this.rotaAtual.snapshot.paramMap.has('id')){
      this.cadastroOp = false;
      const idEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      
      this.tarefaService.pesquisar(idEdicao!).subscribe({
        next: tarefaRetornada => this.tarefa = tarefaRetornada
      })
    }

    if(this.cadastroOp === true){
      this.tarefa.estado = "todo";
      var today = new Date();
      this.tarefa.datetime = today;
    }
  }

  ngOnInit(): void {
    this.tarefaService.listar().subscribe({
        next: (tarefas) => {
          this.tarefasAll = tarefas;
          this.organizarTarefas(this.tarefasAll)
          
          this.tarefasToDo.sort(function(a,b){
            return Number(b.datetime!) - Number(a.datetime!);
          });
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
    if(this.tarefa.id){
      this.tarefaService.atualizar(this.tarefa).subscribe({
          next: tarefaAtualizada => {
              console.log(tarefaAtualizada);
              this.roteador.navigate(['tarefas']);    
          }})
    }else{
        this.tarefaService.inserir(this.tarefa).subscribe({
          next: (tarefa) => {
              console.log("Sucesso", tarefa);
              this.tarefa = new Tarefa();
              this.tarefa.estado = "todo";
              var today = new Date();
              this.tarefa.datetime = today;
          }
       })  
    } 
  }  
}
