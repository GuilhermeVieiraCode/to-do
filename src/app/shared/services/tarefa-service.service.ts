import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = "http://localhost:3000/tarefas";
  
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Tarefa[]>{
      return this.httpClient.get<Tarefa[]>(this.url);
  }

  inserir(tarefa : Tarefa): Observable<Tarefa>{
      return this.httpClient.post<Tarefa>(this.url, tarefa);
  }

  remover(id: number): Observable<object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

//   organizarTarefas(tarefas: Array<Tarefa): Array{
//     tarefasToDo = [];
//     tarefasDoing = [];
//     tarefasDone = [];
    
//     tarefas.map(tarefa => {
//       switch(tarefa.estado){
//         case "todo":
//           tarefasToDo.unshift(tarefa);
//           break;
//         case "doing":
//           tarefasDoing.unshift(tarefa);
//           break;
//         case "done":
//           tarefasDone.unshift(tarefa);
//           break;  
//       }
//     }) 
//   }
}
