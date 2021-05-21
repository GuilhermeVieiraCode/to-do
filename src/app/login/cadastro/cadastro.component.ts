import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../shared/services/usuarios.service';
import {Usuario} from '../../shared/models/usuario';
import {Observable} from 'rxjs';
import {MensagemService} from '../../shared/services/mensagem.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['../login.component.scss']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuariosService, private mensagemService: MensagemService, private fb: FormBuilder) {
    this.usuario = new Usuario();
  }


  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
  }
  cadastrarUsuario(): void{
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(
      usuario => {
        this.mensagemService.success('Cadastro concluído!');
        this.usuario = usuario;
      }
    );
  }

}
