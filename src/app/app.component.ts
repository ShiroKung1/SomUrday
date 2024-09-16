import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private U:NavController) {}
  detail(){
    this.U.navigateRoot('/detail')
  }
  product(){
    this.U.navigateRoot('/detail-product')
  }
  his(){
    this.U.navigateRoot('/history-order')
  }
  set(){
    this.U.navigateRoot('/setting')
  }
  rin(){
    this.U.navigateRoot('/seirin')
  }
  pro(){
    this.U.navigateRoot('/profile')
  }
  details(){
    this.U.navigateForward('/detail')
  }
}
