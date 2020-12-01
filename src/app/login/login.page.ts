import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

import { AngularFireAuth } from '@angular/fire/auth'; 
import { NavController, MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    
    formGroup : FormGroup; 
    constructor(private formBuilder : FormBuilder,
      private auth : AngularFireAuth,
      private navCtrl : NavController,
      private menuCtrl : MenuController,
     
      ) {
        this.ionViewWillEnter();
      } 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
     
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

 
   }