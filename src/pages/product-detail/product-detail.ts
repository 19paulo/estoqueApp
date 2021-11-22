import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product: any;
  categories: any;
  editProduct: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public productProvider: ProductProvider) {
    this.product = this.navParams.get('product');
    this.categories = this.navParams.get('categories');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  edit() {
    this.editProduct = !this.editProduct;
  }

  delete() {
    this.productProvider.remove(this.product.key);
    this.toastController.create({
      message: "Produto removido com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

  update() {
    this.productProvider.update(this.product.key, this.product.product);
    this.toastController.create({
      message: "Produto atualizado com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

}
