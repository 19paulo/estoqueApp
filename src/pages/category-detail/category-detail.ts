import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

/**
 * Generated class for the CategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage {

  category: any;
  editCategory: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public categoryProvider: CategoryProvider) {
    this.category = this.navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad categoryDetailPage');
  }

  edit() {
    this.editCategory = !this.editCategory;
  }

  delete() {
    // this.categories.splice(this.categories.indexOf(this.category), 1);
    this.categoryProvider.remove(this.category.key);
    this.toastController.create({
      message: "Categoria removida com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

  update() {
    this.categoryProvider.update(this.category.key, this.category.category);
    this.toastController.create({
      message: "Categoria atualizada com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

}
