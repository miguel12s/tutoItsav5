import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './agregar-estudiante.component';

const routes: Routes = [
  {path:'',component:AgregarEstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarEstudianteRoutingModule { }
