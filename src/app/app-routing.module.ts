import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogarComponent} from './login/logar/logar.component';
import {CadastroComponent} from './login/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: LogarComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
