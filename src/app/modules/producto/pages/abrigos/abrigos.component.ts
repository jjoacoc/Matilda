import { Component, AfterViewInit } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';
@Component({
  selector: 'app-abrigos',
  templateUrl: './abrigos.component.html',
  styleUrls: ['./abrigos.component.css']
})


export class AbrigosComponent {


  public abrigos: Ropa[];

  constructor() {
    this.abrigos = [
      {
        id: "1",
        titulo: "Remeras",
        imagen: "../../../../../assets/img1.jpg",
        alt: "Imagen de Remeras",
        parrafo: "1234"
      },
      {

        id: "2",
        titulo: "Sweaters",
        imagen: "../../../../../assets/img3.jpg",
        alt: "Imagen de Sweaters",
        parrafo: ""
      },
      {

        id: "3",
        titulo: "Pantalones",
        imagen: "../../../../../assets/img2.jpg",
        alt: "Imagen de Pantalones",
        parrafo: ""

      },
      {
        id: "4",
        titulo: "Buzos",
        imagen: "../../../../../assets/img4.jpg",
        alt: "Imagen de Buzos",
        parrafo: "3131"

      }
    ]
  }


  ngAfterViewInit(): void {
    const bgImage = document.getElementById('bg-image');
    if (bgImage) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const pageHeight = document.body.offsetHeight; // altura total de la página
  
        if (scrollPosition < pageHeight * 1.5) {
          const opacity = 1 - (scrollPosition / (pageHeight * 1.5));
          const scale = 1 + (scrollPosition / (pageHeight * 1)) * 0.2; // cambia la fórmula para agrandar la imagen
          bgImage.style.opacity = opacity.toString();
          bgImage.style.transform = `scale(${scale})`; // agrega la propiedad transform con la función scale
        } else {
          bgImage.style.opacity = '0';
        }
      });
    } else {
      console.error('El elemento bg-image no existe en el DOM');
    }
  }

  
}


