import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//INICIO - PAGINA INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';
import { DivisorComponent } from './components/divisor/divisor.component';


//COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

//COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    DivisorComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    DivisorComponent
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
