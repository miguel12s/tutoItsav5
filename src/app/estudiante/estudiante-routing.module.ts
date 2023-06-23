import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HorarioComponent } from "./horario/horario.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { EstudianteComponent } from "./estudiante.component";

const routes: Routes = [

  {
    path: '',
    component: EstudianteComponent,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
      {path:'tutoriasPendientes',loadChildren:()=>import('./tutorias-pendientes/tutorias-pendientes.module').then(m=>m.TutoriasPendientesModule)},
      {path:'buscarTutoria',loadChildren:()=>import('./buscar/buscar.module').then(m=>m.BuscarModule)}
    ]
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRouting {


}