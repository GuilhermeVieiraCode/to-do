import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';

@NgModule({
  declarations: [CriarTarefaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
      CriarTarefaComponent
  ]
})
export class TarefaModule { }
