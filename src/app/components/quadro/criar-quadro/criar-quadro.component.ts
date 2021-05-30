import { Component, OnInit } from '@angular/core';
import { Quadro } from 'src/app/shared/models/quadro';

@Component({
  selector: 'app-criar-quadro',
  templateUrl: './criar-quadro.component.html',
  styleUrls: ['./criar-quadro.component.scss']
})
export class CriarQuadroComponent implements OnInit {
  
  quadro! : Quadro;
  quadrosAll!: Array<Quadro>;
  cadastroOp = true;

  constructor( ) { }

  ngOnInit(): void {}

}
