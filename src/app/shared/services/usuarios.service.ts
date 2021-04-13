import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from '../models/usuario';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL_USUARIO = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) { }
  pegarTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URL_USUARIO);
  }
  pegarPorEmail(email: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL_USUARIO}/${email}`);
  }
  cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.URL_USUARIO, usuario);
  }
}
