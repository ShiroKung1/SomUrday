import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-seirin',
  templateUrl: './seirin.page.html',
  styleUrls: ['./seirin.page.scss'],
})
export class SeirinPage implements OnInit {

  constructor(private D:NavController) { }
Homes(){
  this.D.navigateRoot('/home')
 
}
  ngOnInit() {
  }

}
