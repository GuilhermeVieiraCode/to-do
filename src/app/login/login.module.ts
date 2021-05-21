import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroComponent} from './cadastro/cadastro.component';
import {LogarComponent} from './logar/logar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {NgxMaskModule} from 'ngx-mask';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CadastroComponent,
    LogarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    NgxMaskModule.forRoot(),
    RouterModule,
  ],
})
export class LoginModule { }
