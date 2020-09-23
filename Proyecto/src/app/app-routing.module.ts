import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancionComponent } from './canciones/cancion/cancion.component';
import { DefaultComponent } from './principal/default/default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'cancion',
    component: CancionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
