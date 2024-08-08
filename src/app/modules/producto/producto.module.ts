import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { RemerasComponent } from './pages/remeras/remeras.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent,
    VestidosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatIconModule
  ],
  exports: [
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent,
    VestidosComponent,
    MatIconModule
  ]
})
export class ProductoModule { }
