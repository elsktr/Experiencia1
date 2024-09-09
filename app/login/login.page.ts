import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  onSubmit() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Iniciar sesión:', this.username, this.password);
    // Redirigir al usuario a la página principal después de la autenticación
    this.navCtrl.navigateRoot('/inicio-estudiante');
  }
}