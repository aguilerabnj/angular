import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Licor } from '../../../../models/licor'; 

@Component({
  selector: 'app-seccion3',
  imports: [ CommonModule],
  templateUrl: './seccion3.html',
  styleUrl: './seccion3.css'
})
export class Seccion3 {
public infolicor: Licor[] = [];
//DEFINO LICOR COMO ARREGLO Y LO INICIALIZO VACIO
  // tarjeta actualmente seleccionada (null cuando no hay selección)
  

  constructor(){
    // inicializamos infolicor en el constructor con objetos que cumplen la interfaz Licor
    // (asegúrate de que las rutas en `img` apunten a assets existentes)
    this.infolicor = [
      {
        id: 1,
        img: "../../../../../assets/fernet.jpg",
        alt: "fernet",
        titulo: "FERNET",
        precio: 25000
      },
      {
        id: 2,
        img: "../../../../../assets/aperol.jpg",
        alt: "aperol",
        titulo: "APEROL",
        precio: 18000
      },
         {
        id: 2,
        img: "../../../../../assets/gancia.jpg",
        alt: "gancia",
        titulo: "GANCIA",
        precio: 14000
      }
    ];
  }
tarjetaseleccionada: any = null; 
  // método para mostrar más detalles; se mantiene el uso de `any` por preferencia
  verMas(Licor: any ){
    this.tarjetaseleccionada = Licor;
  }
}
