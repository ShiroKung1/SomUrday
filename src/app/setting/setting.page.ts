import { state } from '@angular/animations';
import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular'
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  i:any;
  items=[
    {
      id: 1,
      name:'น้ำส้ม',
      price:'60บาท',
      imageURL:'assets/img/download (9).jfif',
      printable: 'หวานหอมสดชื่นอร่อยถูกใจ',
    },
    {
      id: 2,
      name:'น้ำฝรั่ง',
      price:'60บาท',
      imageURL:'assets/img/download (2).jfif',
      printable: 'หวานอร่อยหอมกลิ่นฝรั่ง',
    },{
      id: 3,
      name:'น้ำเสาวรส',
      price:'60บาท',
      imageURL:'assets/img/download (1).jfif',
      printable: 'หวานเปรียวสดชื่นหอมเสาวรส',
    },{
      id: 4,
      name:'น้ำกระชาย',
      price:'60บาท',
      imageURL:'assets/img/download (3).jfif',
      printable: 'กินงายดีต่อสุขภาพอร่อยถูกใจ',
    }
  ];


  constructor(
    private K:NavController,
    private router:Router ) {
      const navigation = this.router.getCurrentNavigation();
      this.i = navigation?.extras?.state?.['i'];
     }   

     gotomodal(i:any){
          this.i={state:{i}};
     }

     @ViewChild(IonModal) modal!: IonModal;

     message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
     name!: string;
   
     cancel() {
       this.modal.dismiss(null, 'cancel');
     }
   
     confirm() {
       this.modal.dismiss(this.name, 'confirm');
     }
   
     onWillDismiss(event: Event) {
       const ev = event as CustomEvent<OverlayEventDetail<string>>;
       if (ev.detail.role === 'confirm') {
         this.message = `Hello, ${ev.detail.data}!`;
       }
     }
  ngOnInit() {}
}
