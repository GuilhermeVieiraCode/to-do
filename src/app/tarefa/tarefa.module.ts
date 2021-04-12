import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CriarTarefaComponent, ListarTarefaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
      CriarTarefaComponent,
      ListarTarefaComponent
  ]
})
export class TarefaModule { }
