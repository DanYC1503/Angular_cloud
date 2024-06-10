// src/app/components/create/create.component.ts
import { Component } from '@angular/core';
import { Usuario } from 'src/app/domain/Usuario';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  Usuario: Usuario = new Usuario();

  constructor(private UsuarioService: UsuarioService) { }

  onSubmit(): void {
    this.UsuarioService.addUsuario(this.Usuario).subscribe(
      response => {
        console.log('Client created successfully', response);
        // Optionally reset the form
        this.Usuario = new Usuario();
      },
      error => {
        console.error('Error creating client', error);
      }
    );
  }
}
