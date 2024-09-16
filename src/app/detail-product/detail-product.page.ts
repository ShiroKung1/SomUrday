import { Component, OnInit , ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  items=[
    {
      id: 1,
      name:'น้ำส้ม',
      price:'60บาท',
      imageURL:'assets/img/download (9).jfif'
    },
    {
      id: 2,
      name:'น้ำฝรั่ง',
      price:'60บาท',
      imageURL:'assets/img/download (2).jfif',
    },{
      id: 3,
      name:'น้ำเสาวรส',
      price:'60บาท',
      imageURL:'assets/img/download (1).jfif',
    },{
      id: 4,
      name:'น้ำกระชาย',
      price:'60บาท',
      imageURL:'assets/img/download (3).jfif',
    }
  ]; 


  @ViewChild('popover') popover: {event: Event;} |
  undefined;
  presentingElement = undefined;
 
  isOpen = false;
  constructor(private actionSheetCtrl: ActionSheetController ,private alertController: AlertController, private  X: NavController) {}
  presentPopover(e: Event) {
    this.isOpen = true;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'รายระเอียดสินค้า',
      subHeader: 'ความหวาน',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }
handleRefresh(event: { target:{complete:()=>void;};}) {
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}
setting(){
  this.X.navigateForward('/setting');
}
ngOnInit(){}
}