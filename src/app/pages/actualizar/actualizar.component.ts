import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/Usuario';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectedUsuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  fetchUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.usuarios = data;
      },
      error => {
        console.error('Error fetching clients', error);
      }
    );
  }
  selectUsuario(usuario: Usuario): void {
    this.selectedUsuario = usuario;
    console.log('Selected usuario:', usuario);
  }
  onSubmit(): void {
    this.usuarioService.updateUsuario(this.selectedUsuario).subscribe(
      response => {
        console.log('Client updated successfully', response);
        // Optionally reset the form
        this.selectedUsuario = new Usuario();
      },
      error => {
        console.error('Error updating client', error);
      }
    );
  }
}
