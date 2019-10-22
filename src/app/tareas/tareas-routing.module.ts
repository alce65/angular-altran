import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './tareas.component';
import { ListaTareasComponent } from './tareas-plus/lista-tareas/lista-tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';


const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
    children: [
      { path: 'tareas-simple', component: TareasSimpleComponent },
      { path: 'tareas-plus', component: ListaTareasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
