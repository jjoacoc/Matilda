import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { RemerasComponent } from './pages/remeras/remeras.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';

@NgModule({
  declarations: [
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent,
    VestidosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent,
    VestidosComponent
  ]
})
export class ProductoModule { }
