import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Quadro } from '../models/quadro';
import {Tarefa} from '../models/tarefa';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuadroFirestoreService {

  colecaoQuadros: AngularFirestoreCollection<Quadro>;
  NOME_COLECAO = 'quadros';
  
  constructor(private afs: AngularFirestore) {
    this.colecaoQuadros = afs.collection(this.NOME_COLECAO);
  }
  
  listar(): Observable<Quadro[]> {
    return this.colecaoQuadros.valueChanges({idField: 'id'});
  }
  
  inserir(quadro: Quadro): Observable<object> {
    delete quadro.id;
    return from(this.colecaoQuadros.add(Object.assign({}, quadro)));
  }
  
  remover(id: string): Observable<void> {
    return from(this.colecaoQuadros.doc(id).delete());
  }

  pesquisar(id: string): Observable<Quadro> {
    return this.colecaoQuadros.doc(id).get().pipe(map(document => new Quadro(document.id, document.data())));
  }

  atualizar(quadro: Quadro): Observable<void> {
    return from(this.colecaoQuadros.doc(quadro.id).update(Object.assign({}, quadro)));
    }
}
