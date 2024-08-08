import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';
@Component({
  selector: 'app-abrigos',
  templateUrl: './abrigos.component.html',
  styleUrls: ['./abrigos.component.css']
})
export class AbrigosComponent {
  public abrigos: Ropa[];

  constructor(){
    this.abrigos = [
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
