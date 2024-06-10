// src/app/components/eliminar/eliminar.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Usuario } from 'src/app/domain/Usuario';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectedUsuario: Usuario | null = null;

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

  deleteSelectedUsuario(): void {
    if (this.selectedUsuario !== null) {
      this.usuarioService.deleteUsuario(this.selectedUsuario.codigo).subscribe(
        () => {
          this.fetchUsuarios(); // Refresh the list after deletion
          this.selectedUsuario = null; // Deselect the client after deletion
        },
        error => {
          console.error('Error deleting client', error);
        }
      );
    }
  }
  selectUsuario(usuario: Usuario): void {
    this.selectedUsuario = usuario;
    console.log('Selected usuario:', usuario);
  }

}
