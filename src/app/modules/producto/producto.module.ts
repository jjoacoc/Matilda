import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { VestidosComponent } from './pages/vestidos/vestidos.component';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { RemerasComponent } from './pages/remeras/remeras.component';


@NgModule({
  declarations: [
    VestidosComponent,
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
