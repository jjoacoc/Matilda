import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { MatIconModule } from '@angular/material/icon';


//INICIO - PAGINA INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

//COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

//COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DivisorComponent } from './components/divisor/divisor.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    DivisorComponent,
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
