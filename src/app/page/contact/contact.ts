import { Component } from '@angular/core';
import { Licor } from '../../models/licor';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  /*propiedad privada osea un tipo de variable */
  private contadorid = 1;
  /*
   Comentarios de cambios (Seccion1):
   - Corregí `styleUrl` (incorrecto) a `styleUrls` anteriormente.
   - Inicialicé `infolicor` en la declaración para mantener consistencia con Seccion2
     (antes estaba declarada pero no inicializada hasta el constructor).
   - Cambié `tarjetaseleccionada` de `any` a `Licor | null` y renombré/typé el parámetro
     de `verMas` para seguir buenas prácticas.
   - El formulario reactivo (`nuevolicor`) y `crearLicor()` se dejaron sin cambios.
  */

  coleccion: Licor[] = []; /*recibe solamente cosas que cumplan con el estandar de licor */
  //instancia que se vincula con el formulario desde el html
  /* nombre propiedad: new Control ->
  string -> "" / number -> null
  validators.required -> valor obligatorio
   */
  nuevolicor = new FormGroup({
  titulo: new FormControl("", Validators.required),
  precio: new FormControl(null,Validators.required ),
  img: new FormControl(""),
  alt: new FormControl("")
  })


  // arreglo tipado para listar licores (inicializado para evitar undefined)
  /**
 * @description metodo para crear un nuevo licor segun la interfaz licor
 */
crearLicor():void{
  if(this.nuevolicor.valid){
    const nuevoLicor : Licor = {
      //asigno el id autoincremental le asignamos un contador
      id: this.contadorid++,
      //las demas propiedades, asignamos desde el formulario el valor que se recibio desde su casilla o formControlName
      titulo: this.nuevolicor.value.titulo!,
      precio: this.nuevolicor.value.precio!,
  }
  this.coleccion.push(nuevoLicor)
  console.log("Licor agregado",nuevoLicor)
  console.log("coleccion actual",this.coleccion)
}
}
}
