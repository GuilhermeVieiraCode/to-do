import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarQuadroComponent } from './criar-quadro/criar-quadro.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ListarQuadroComponent } from './listar-quadro/listar-quadro.component';


@NgModule({
  declarations: [CriarQuadroComponent, ListarQuadroComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    CriarQuadroComponent
  ]
})
export class QuadroModule { }
