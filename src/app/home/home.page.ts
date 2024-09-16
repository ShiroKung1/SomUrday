import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private D : NavController,private A : NavController) {}
  detail(){
    this.D.navigateForward('/detail')
  }
As(){
  this.A.navigateForward('/seirin')
}

}
