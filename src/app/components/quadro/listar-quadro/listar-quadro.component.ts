import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quadro } from 'src/app/shared/models/quadro';
import { QuadroFirestoreService } from 'src/app/shared/services/quadro-firestore.service';

@Component({
  selector: 'app-listar-quadro',
  templateUrl: './listar-quadro.component.html',
  styleUrls: ['./listar-quadro.component.scss']
})
export class ListarQuadroComponent implements OnInit {

  @Input() quadrosAll!: Array<Quadro>;
  teste!: Array<Quadro>;
  
  constructor( private quadroService : QuadroFirestoreService,
               private roteador : Router  ) { 
              
                this.teste = new Array<Quadro>() 
               }

  ngOnInit(): void {}

  editar(): void {}

}
