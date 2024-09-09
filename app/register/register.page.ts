import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre: string='';
  apellido: string='';
  correo: string='';
  telefono: string='';

  onSubmit(){

    console.log('Registro exitoso');
    console.log('Nombre ${this.nombre}');
    console.log('Apellido ${this.apellido}' );
    console.log('Correo ${this.correo}');
    console.log('Telefono: ${this.telefono}');
  }

  constructor() { }

  ngOnInit() {
  }

}
