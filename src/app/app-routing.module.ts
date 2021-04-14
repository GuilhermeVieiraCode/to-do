import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogarComponent} from './login/logar/logar.component';
import {CadastroComponent} from './login/cadastro/cadastro.component';
import {ListarComponent} from './login/listar/listar.component';
import { CriarTarefaComponent } from './tarefa/criar-tarefa/criar-tarefa.component';

const routes: Routes = [
  {
    path: '',
    component: CriarTarefaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
