import { Component } from '@angular/core';
import { Licor } from '../../models/licor';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas {
public infolicor: Licor[] = [];
constructor(){
  this.infolicor = [
    {
      id:1,
      img: "../../../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINO",
      precio: 10000
    },
    {
      id:2,
      img: "../../../../../assets/vidka.jpg",
      alt: "vodka",
      titulo: "VODKA",
      precio: 17000
    },
        {
      id:3,
      img: "../../../../../assets/fernet.jpg",
      alt: "fernet",
      titulo: "FERNET",
      precio: 9000
    }
  ]
}
  // tarjeta actualmente seleccionada
  // NOTE: el usuario pidió mantener `any`, por eso usamos `any` aquí.
  tarjetaseleccionada: any = null;

  // Método verMas: param se mantiene con tipo `any` según preferencia del usuario
  verMas(Licor: any ){
    this.tarjetaseleccionada = Licor;
  }


}
