import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  abrirMenu(){
    this.menuController.open('menu-content')
  }

}
