import { Component } from '@angular/core'
import { Tarjeta } from '../../models/tarjeta'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
public infoTarjeta: Tarjeta[];
/* Declaramos */
constructor(){
  this.infoTarjeta = [
    {
      id: 1,
      img: "../../../assets/campari.jpg",
      alt: "campari",
      titulo: "CAMPARI",
      descripcion: "bebida roja ",
      fechapublicacion: 2025
    },
        {
      id: 2,
      img: "../../../assets/birra.jpg",
      alt: "birra",
      titulo: "BIRRA",
      descripcion: "gaseosa salada",
      fechapublicacion: 2025
    },
        {
      id: 3,
      img: "../../../assets/fernet.jpg",
      alt: "fernet",
      titulo: "FERNET",
      descripcion: "bebida herbal",
      fechapublicacion: 2025
    },
        {
      id: 4,
      img: "../../../assets/gancia.jpg",
      alt: "gancia",
      titulo: "GANCIA",
      descripcion: "bebida tomada con sprite",
      fechapublicacion: 2025
    },
    {
      id: 5,
        img: "../../../assets/malibu.jpg",
      alt: "malibu",
      titulo: "MALIBU",
      descripcion: "bebida tropical",
      fechapublicacion: 2025
    },
        {
      id: 6,
        img: "../../../assets/vidka.jpg",
      alt: "vodka",
      titulo: "VODKA",
      descripcion: "clasica bebida fuerte",
      fechapublicacion: 2025
    },
        {
      id: 7,
        img: "../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINOS",
      descripcion: "vino tinto, blanco, y rosa",
      fechapublicacion: 2025
    },
            {
      id: 8,
        img: "../../../assets/aperol.jpg",
      alt: "aperol",
      titulo: "APEROL",
      descripcion: "bebida a base de hierbas",
      fechapublicacion: 2025
    }
    
  ]
}
tarjetaseleccionada: any = null;

verMas(tarjeta: any ){
  this.tarjetaseleccionada = tarjeta
}
}
