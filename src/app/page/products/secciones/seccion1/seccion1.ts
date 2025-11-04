import { Component } from '@angular/core';
import { Licor } from '../../../../models/licor';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-seccion1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion1.html',
  styleUrl: './seccion1.css'
})
export class Seccion1 {
  /*propiedad privada osea un tipo de variable */
  private contadorid = 1;
  coleccion: Licor[] = [] /*recibe solamente cosas que cumplan con el estandar de licor */
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


public infolicor: Licor[];
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
      id:1,
      img: "../../../../../assets/birra.jpg",
      alt: "biira",
      titulo: "BIRRA",
      precio: 9000
    }
  ]
}
tarjetaseleccionada: any = null;

verMas(Licor: any ){
  this.tarjetaseleccionada = Licor
}
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
