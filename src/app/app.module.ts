import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarefaModule } from './components/tarefa/tarefa.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { FirestoreModule } from './firestore/firestore.module';
import { AutenticacaoModule } from './components/autenticacao/autenticacao.module';
import { QuadroModule } from './components/quadro/quadro.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FirestoreModule,
    TarefaModule,
    AutenticacaoModule,
    QuadroModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
