import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarefaModule } from './tarefa/tarefa.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {CadastroComponent} from './login/cadastro/cadastro.component';
import {LogarComponent} from './login/logar/logar.component';
import { FirestoreModule } from './firestore/firestore.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    TarefaModule,
    FirestoreModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
