import { Component } from '@angular/core';
import { Licor } from '../../../../models/licor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion1',
  imports: [],
  templateUrl: './seccion1.html',
  styleUrl: './seccion1.css'
})
export class Seccion1 {
public infolicor: Licor[];
constructor(){
  this.infolicor = [
    {
      id: "1t",
      img: "../../../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINO"
    
    }
  ]
}
tarjetaseleccionada: any = null;

verMas(Licor: any ){
  this.tarjetaseleccionada = Licor
}
}


