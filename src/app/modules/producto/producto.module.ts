import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { RemerasComponent } from './pages/remeras/remeras.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

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
    MatIconModule,
    MatCardModule
  ],
  exports: [
    AbrigosComponent,
    PantalonesComponent,
    RemerasComponent,
    VestidosComponent,
    MatIconModule,
    MatCardModule
  ]
})
export class ProductoModule { }
