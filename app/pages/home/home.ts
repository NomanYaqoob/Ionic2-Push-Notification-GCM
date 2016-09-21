import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push } from "ionic-native"
import {Auth, User, CloudSettings, provideCloud} from '@ionic/cloud-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    var push = Push.init({
      android: {
        senderID: '601594166486'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    });

    push.on("registration", function (data) {
      console.log("data.registrationId", data.registrationId);
    })



    push.on('notification', function (data) {
      console.log(data.message);
      console.log(data.title);
      console.log(data.count);
      console.log(data.sound);
      console.log(data.image);
      console.log(data.additionalData);
    });

    push.on('error', function (e) {
      console.log(e.message);
    });
  }
}
