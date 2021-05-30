import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './components/autenticacao/cadastro/cadastro.component';
import { LogarComponent } from './components/autenticacao/logar/logar.component';
import { TelaTarefaComponent } from './components/tarefa/tela-tarefa/tela-tarefa.component';
import { CriarTarefaComponent } from './components/tarefa/criar-tarefa/criar-tarefa.component';
import { CriarQuadroComponent } from './components/quadro/criar-quadro/criar-quadro.component';

const routes: Routes = [
    {
      path: 'tarefas',
      component: TelaTarefaComponent
    },
    {
      path: 'tarefas/:id',
      component: CriarTarefaComponent
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
      path: 'quadros',
      component: CriarQuadroComponent
    },
    {
      path: '',
      component: TelaTarefaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
