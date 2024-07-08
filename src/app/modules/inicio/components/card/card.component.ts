import { Component } from '@angular/core';

//IMPORTAMOS INTERFAZ
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: Ropa[];

  constructor(){
    this.info = [
      {
        id: "1",
        titulo:"Remeras",
        imagen: "../../../../../assets/img1.jpg",
        alt: "Imagen de Remeras",
        parrafo: ""
      },
      {

        id: "2",
        titulo:"Sweaters",
        imagen: "../../../../../assets/img3.jpg",
        alt: "Imagen de Sweaters",
        parrafo: ""
      },
      {
        
        id: "3",
        titulo:"Pantalones",
        imagen: "../../../../../assets/img2.jpg",
        alt: "Imagen de Pantalones",
        parrafo: ""

      },
      { 
        id: "4",
        titulo:"Buzos",
        imagen: "../../../../../assets/img4.jpg",
        alt: "Imagen de Buzos",
        parrafo: ""

      }
    ]
  }
}
