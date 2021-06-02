import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quadro } from 'src/app/shared/models/quadro';
import { Tarefa } from 'src/app/shared/models/tarefa';
import { QuadroFirestoreService } from 'src/app/shared/services/quadro-firestore.service';

@Component({
  selector: 'app-criar-quadro',
  templateUrl: './criar-quadro.component.html',
  styleUrls: ['./criar-quadro.component.scss']
})
export class CriarQuadroComponent implements OnInit {
  
  quadro!: Quadro;
  quadrosAll!: Array<Quadro>;
  cadastroOp = true;

  constructor( private quadroService : QuadroFirestoreService,
               private rotaAtual :  ActivatedRoute,
               private roteador : Router) { 
    
    this.quadro = new Quadro();
    this.quadro.tarefas = new Array<Tarefa>();
    
    if(this.rotaAtual.snapshot.paramMap.has('id')){
      this.cadastroOp = false;
      const idEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      
      this.quadroService.pesquisar(idEdicao!).subscribe({
        next: quadroRetornado => this.quadro = quadroRetornado
      })
    }
  }  
  
  ngOnInit(): void {
    this.quadroService.listar().subscribe({
        next: (quadros) => {
          this.quadrosAll = quadros;
      }
    })
  }

  salvarQuadro(): void{
    if(this.quadro.id){
      this.quadroService.atualizar(this.quadro).subscribe({
          next: quadroAtualizada => {
              console.log(quadroAtualizada);
              this.roteador.navigate(['quadros']);    
          }})
    }else{
        this.quadroService.inserir(this.quadro).subscribe({
          next: (quadro) => {
              console.log("Sucesso", quadro);
              this.quadro = new Quadro();
              this.quadro.tarefas = new Array<Tarefa>();
              
              this.quadroService.listar().subscribe({
                next: (quadros) => {
                  this.quadrosAll = quadros;
              }
            })    

          }
          
       })  
    } 
  }
}
