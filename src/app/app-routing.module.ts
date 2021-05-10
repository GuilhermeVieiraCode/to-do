import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './autenticacao/cadastro/cadastro.component';
import { LogarComponent } from './autenticacao/logar/logar.component';
import { TelaTarefaComponent } from './tarefa/tela-tarefa/tela-tarefa.component';

const routes: Routes = [
    {
        path: 'criartodo',
        component: TelaTarefaComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
      path: 'login',
      component: LogarComponent
  },
    {
      path: '',
      component: TelaTarefaComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
