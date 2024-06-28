import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importaciones de las vistas
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { RemerasComponent } from './pages/remeras/remeras.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';

const routes: Routes = [
  {
    path: "abrigos", component:AbrigosComponent
  },
  {
    path: "pantalones", component:PantalonesComponent
  },
  {
    path: "remeras", component:RemerasComponent
  },
  {
    path: "vestidos", component:VestidosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
