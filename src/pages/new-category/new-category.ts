import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Category } from '../../models/category';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-new-category',
  templateUrl: 'new-category.html',
})
export class NewCategoryPage {

  form: FormGroup;
  categories: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public categoryProvider: CategoryProvider) {
      // this.categories = this.navParams.get('categories');
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      });

  }

  onSubmit() {
    let values = this.form.value;
    let category: Category = new Category(values);
    // this.categories.push(category);
    this.categoryProvider.insert(category);
    this.toastCtrl.create({
      message: "Categoria criada com sucesso.",
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCategoryPage');
  }

}
