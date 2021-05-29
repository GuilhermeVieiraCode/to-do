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

  atualizar(tarefa: Tarefa): Observable<Tarefa>{
    return this.httpClient.put<Tarefa>(`${this.url}/${tarefa.id}`, tarefa);
  }

  pesquisar(id: number): Observable<Tarefa>{
    return this.httpClient.get<Tarefa>(`${this.url}/${id}`);
}
}
