import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/models/usuario';
import {UsuariosService} from '../../shared/services/usuarios.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['../autenticacao.component.scss']
})
export class LogarComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuariosService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
}
