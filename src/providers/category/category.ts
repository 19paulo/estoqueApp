import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryList } from '../../models/categoryList';
import {isLogin, isProduct} from '../../utils/utils';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(category: Category) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, category);
  }

  public update(key: string, category: Category) {
    return this.save(key, category);
  }

  private save(key: string, category: Category) {
    return this.storage.set(key, category);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let categories: CategoryList[] = [];

    return this.storage.forEach((value: Category, key: string, iterationNumber: Number) => {
      if (!isProduct(value) && !isLogin(key)) {
        let category = new CategoryList();
        category.key = key;
        category.category = value;
        categories.push(category);
      }
    })
      .then(() => {
        return Promise.resolve(categories);
      })
      .catch((error) => {
        return Promise.reject(error);
      })

  }
}
