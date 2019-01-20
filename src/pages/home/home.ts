import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private InAppBrowser: InAppBrowser) {

  }

   ionViewDidLoad() {
     const browser = this.InAppBrowser.create('http://creative-bj.com/','_blank',{zoom:'no',location:'no',fullscreen:'yes'});
     browser.show();
  }

}
