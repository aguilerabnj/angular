import { Component } from '@angular/core';
import { Licor } from '../../models/licor';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
public infoLicor: Licor[];
constructor(){
  this.infoLicor = [
    {
      id: 1,
      img: "../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINO",
      precio: 15000
    },
    {
      id: 1,
      img: "../../../assets/vidka.jpg",
      alt: "vodka",
      titulo: "VODKA",
      precio: 12000
    },
    {
      id: 1,
      img: "../../../assets/campari.jpg",
      alt: "fernet",
      titulo: "FERNET",
      precio: 11000
    },
    {
      id: 1,
      img: "../../../assets/campari.jpg",
      alt: "campari",
      titulo: "CAMPARI",
      precio: 10000
    }
  ]
}
tarjetaseleccionada: any = null;

verMas(tarjeta: any ){
  this.tarjetaseleccionada = tarjeta
}
}
