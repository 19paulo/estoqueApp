import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../../models/product';
import { ProductList } from '../../models/productList';
import { isProduct } from '../../utils/utils';

@Injectable()
export class ProductProvider {

  id: number = 0;

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(product: Product) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, product);
  }

  public update(key: string, product: Product) {
    return this.save(key, product);
  }

  private save(key: string, product: Product) {
    return this.storage.set(key, product);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let products: ProductList[] = [];

    return this.storage.forEach((value: Product, key: string, iterationNumber: Number) => {
      if (isProduct(value)) {
        let product = new ProductList();
        product.key = key;
        product.product = value;
        products.push(product);
      }

    })
    .then(() => {
      return Promise.resolve(products);
    })
    .catch((error) => {
      return Promise.reject(error);
    })

  }

}
