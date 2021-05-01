import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
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
   // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
   return this.colecaoTarefas.valueChanges({idField: 'id'});
 }
 
 inserir(tarefa: Tarefa): Observable<object> {
   // removendo id pois ele está undefined, já que um novo usuário
   delete tarefa.id;
   // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
   // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
   return from(this.colecaoTarefas.add(Object.assign({}, tarefa)));
 }
 
 remover(id: string): Observable<void> {
   return from(this.colecaoTarefas.doc(id).delete());
 }
} 
