import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { CreateComponent } from './pages/create/create.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';

const routes: Routes = [
  {path: "header", component: HeaderComponent},
  {path: "crear", component: CreateComponent},
  {path: "eliminar", component: EliminarComponent},
  {path: "actualizar", component: ActualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
