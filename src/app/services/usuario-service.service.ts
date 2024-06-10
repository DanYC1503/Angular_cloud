import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/Cloud_project/rs/users'; // Base URL of your API

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/list`);
  }
  addUsuario(Usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Usuario>(`${this.apiUrl}`, Usuario, { headers });
  }

  updateUsuario(Usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Usuario>(`${this.apiUrl}/${Usuario.codigo}`, Usuario, { headers });
  }

  deleteUsuario(id?: number): Observable<void> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
