import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import {Usuario} from '../../usuario/usuario';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['../login.component.scss']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuariosService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void{
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(
      usuario => { this.usuario = usuario;
      }
    );
  }

}
