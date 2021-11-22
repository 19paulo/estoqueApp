import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../models/category';
import { CategoryList } from '../../models/categoryList';
import { CategoryProvider } from '../../providers/category/category';
import { CategoryDetailPage } from '../category-detail/category-detail';
import { NewCategoryPage } from '../new-category/new-category';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: CategoryList[] = [];
  // categories: Category[] = [
  //   {
  //     name: "Utilit.",
  //     description: "Coisas Úteis",
  //   },
  //   {
  //     name: "Cadernos",
  //     description: "Para Escrever",
  //   },
  //   {
  //     name: "Livros",
  //     description: "Para ler",
  //   },
  //   {
  //     name: "Mochila",
  //     description: "Para Guardar",
  //   },
  // ];

  ionViewDidEnter() {
    this.categoriesProvider.getAll().then((response) => {
      this.categories = response;
    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriesProvider: CategoryProvider) {
  }

  open(category: any) {
    this.navCtrl.push(CategoryDetailPage, {
      category,
      // categories: this.categories,
    })
  }

  add() {
    this.navCtrl.push(NewCategoryPage);
  }

}
