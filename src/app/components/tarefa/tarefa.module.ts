import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { TelaTarefaComponent } from './tela-tarefa/tela-tarefa.component';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [CriarTarefaComponent, ListarTarefaComponent, TelaTarefaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    LayoutModule,
  ],
  exports: [
      CriarTarefaComponent,
      ListarTarefaComponent,
      TelaTarefaComponent
  ]
})
export class TarefaModule { }
