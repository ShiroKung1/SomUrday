import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private S : NavController) { }

  ngOnInit() {
  }
  detailproduct(){
    this.S.navigateForward('/detail-product')
  }
  set(){
    this.S.navigateRoot('/setting')
  }
  pro(){
    this.S.navigateRoot('/profile')
  }
}
