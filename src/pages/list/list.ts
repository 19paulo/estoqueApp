import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryList } from '../../models/categoryList';
import { ProductList } from '../../models/productList';
import { CategoryProvider } from '../../providers/category/category';
import { ProductProvider } from '../../providers/product/product';
import { HomePage } from '../home/home';
import { NewProductPage } from '../new-product/new-product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  products: ProductList[];
  categories: CategoryList[];

  ionViewDidEnter() {
    this.categoryProvider.getAll().then((response) => {
      this.categories = response;
    })
    this.productProvider.getAll().then((resp) => {
      this.products = resp;

    })
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider,
    public productProvider: ProductProvider) {

  }

  openProduct(product: any) {
    this.navCtrl.push(ProductDetailPage, {
      product: product,
      categories: this.categories,
    })
  }

  add() {
    this.navCtrl.push(NewProductPage, {
      categories: this.categories,
    })
  }
}
