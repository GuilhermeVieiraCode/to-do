import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../usuario/usuario';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['../login.component.scss']
})
export class LogarComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuariosService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
}
