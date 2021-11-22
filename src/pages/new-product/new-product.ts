import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {

  form: FormGroup;
  categories: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public productProvider: ProductProvider) {
      this.categories = this.navParams.get('categories');
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        categorie: [{}, Validators.required],
        price: ['', Validators.required],
        qtd: ['', Validators.required],
      });

  }

  onSubmit() {
    let values = this.form.value;
    let product: Product = {...values};
    this.productProvider.insert(product);
    this.toastCtrl.create({
      message: "Produto criado com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProductPage');
  }

}
