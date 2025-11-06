import { Component } from '@angular/core';
import { Licor } from '../../../../models/licor';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-seccion1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion1.html',
  styleUrls: ['./seccion1.css']
})
export class Seccion1 {
  /*propiedad privada osea un tipo de variable */

  /*
   Comentarios de cambios (Seccion1):
   - Corregí `styleUrl` (incorrecto) a `styleUrls` anteriormente.
   - Inicialicé `infolicor` en la declaración para mantener consistencia con Seccion2
     (antes estaba declarada pero no inicializada hasta el constructor).
   - Cambié `tarjetaseleccionada` de `any` a `Licor | null` y renombré/typé el parámetro
     de `verMas` para seguir buenas prácticas.
   - El formulario reactivo (`nuevolicor`) y `crearLicor()` se dejaron sin cambios.
  */



  // arreglo tipado para listar licores (inicializado para evitar undefined)
public infolicor: Licor[] = [];
constructor(){
  this.infolicor = [
    {
      id:1,
      img: "../../../../../assets/OIP (1).jpg",
      alt: "vino",
      titulo: "VINO",
      precio: 15000
    },
    {
      id:2,
      img: "../../../../../assets/birra.jpg",
      alt: "biira",
      titulo: "BIRRA",
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
