import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './login/cadastro/cadastro.component';
import { CriarTarefaComponent } from './tarefa/criar-tarefa/criar-tarefa.component';
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
      path: '',
      component: TelaTarefaComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
