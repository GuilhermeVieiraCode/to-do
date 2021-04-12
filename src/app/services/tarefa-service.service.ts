import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../shared/models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = "http://localhost:3000/todo";  

  constructor(private httpClient: HttpClient) { }

  listarToDo(): Observable<Tarefa[]>{
      return this.httpClient.get<Tarefa[]>(this.url);
  }
}
