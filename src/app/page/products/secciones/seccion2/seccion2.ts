import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Licor } from '../../../../models/licor';

@Component({
  selector: 'app-seccion2',
    imports: [CommonModule],
    /*ES IMPORTANTE EL COOMON MODULE PORQUE NO TE ANDA LA PAGINA PENDEJO PELOTUDO 
    ES PARA ACTIVAR LA FUNCIONALIDAD DE LA DIRECTIVA NG FOR (SOLO SU FUNCIONALIDAD ACTIVA DIRECTIVAS)
    */
  templateUrl: './seccion2.html',
  styleUrls: ['./seccion2.css']
})
export class Seccion2 {

  /*
   -------------- Comentarios de cambios (Seccion2) --------------
   - Corregí una sintaxis inválida que estaba antes: `public infolicor = Licor[]:`
     Esto no es TypeScript válido. Ahora `infolicor` está tipado e inicializado.
   - Tipé `tarjetaseleccionada` como `Licor | null` en lugar de `any` para mayor seguridad.
   - Renombré y tipeé el parámetro de `verMas` (antes era `Licor: any`) para seguir
     convenciones y evitar confusiones con la interfaz `Licor`.
  ---------------------------------------------------------------
  */

  // arreglo tipado con la interfaz Licor (inicializado para evitar undefined)
  public infolicor: Licor[] = [];

  // tarjeta actualmente seleccionada (null cuando no hay selección)
  

  constructor(){
    // inicializamos infolicor en el constructor con objetos que cumplen la interfaz Licor
    // (asegúrate de que las rutas en `img` apunten a assets existentes)
    this.infolicor = [
      {
        id: 1,
        img: "../../../../../assets/campari.jpg",
        alt: "campari",
        titulo: "CAMPARI",
        precio: 20000
      },
      {
        id: 2,
        img: "../../../../../assets/vidka.jpg",
        alt: "vodka",
        titulo: "VODKA",
        precio: 9000
      },
         {
        id: 2,
        img: "../../../../../assets/malibu.jpg",
        alt: "malibu",
        titulo: "MALIBU",
        precio: 9000
      }
    ];
  }
tarjetaseleccionada: any = null; 
  // método para mostrar más detalles; se mantiene el uso de `any` por preferencia
  verMas(Licor: any ){
    this.tarjetaseleccionada = Licor;
  }
}
