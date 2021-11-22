import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public loginProvider: LoginProvider) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async onSubmit() {
    const response = await this.loginProvider.login(this.loginForm.value.login, this.loginForm.value.senha);
    if (response && response.validated) {
      this.toastCtrl.create({
        message: "Bem vindo, " + this.loginForm.value.login,
        duration: 3000,
        position: 'top',
      }).present();
      this.navCtrl.setRoot(ListPage);
    } else {
      this.toastCtrl.create({
        message: "Login ou senha inválidos.",
        duration: 3000,
        position: 'top',
      }).present();
    }
  }

}
