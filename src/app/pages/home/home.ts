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
      id: "1t",
      img: "../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINO"
    },
    {
      id: "1t",
      img: "../../../assets/vidka.jpg",
      alt: "vodka",
      titulo: "VODKA"
    },
    {
      id: "1t",
      img: "../../../assets/campari.jpg",
      alt: "fernet",
      titulo: "FERNET"
    },
    {
      id: "1t",
      img: "../../../assets/campari.jpg",
      alt: "campari",
      titulo: "CAMPARI"
    }
  ]
}
tarjetaseleccionada: any = null;

verMas(tarjeta: any ){
  this.tarjetaseleccionada = tarjeta
}
}
