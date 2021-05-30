import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Tarefa} from '../models/tarefa';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
 
@Injectable({
 providedIn: 'root'
})
export class TarefaFirestoreService {
 
  colecaoTarefas: AngularFirestoreCollection<Tarefa>;
  NOME_COLECAO = 'tarefas';
  
  constructor(private afs: AngularFirestore) {
    this.colecaoTarefas = afs.collection(this.NOME_COLECAO);
  }
  
  listar(): Observable<Tarefa[]> {
    return this.colecaoTarefas.valueChanges({idField: 'id'});
  }
  
  inserir(tarefa: Tarefa): Observable<object> {
    delete tarefa.id;
    // Object.assign({}, tarefa) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoTarefas.add(Object.assign({}, tarefa)));
  }
  
  remover(id: string): Observable<void> {
    return from(this.colecaoTarefas.doc(id).delete());
  }

  pesquisar(id: string): Observable<Tarefa> {
    // como o objeto retornado pelo get é um DocumentData, e não uma tarefa, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo tarefa
    return this.colecaoTarefas.doc(id).get().pipe(map(document => new Tarefa(document.id, document.data())));
  }

  atualizar(tarefa: Tarefa): Observable<void> {
    return from(this.colecaoTarefas.doc(tarefa.id).update(Object.assign({}, tarefa)));
    }
} 
