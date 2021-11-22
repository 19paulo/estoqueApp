import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})
export class ProductCardComponent {

  @Input()
  name: string;

  @Input()
  categorie: string;

  @Input()
  price: number;

  @Input()
  qtd: number;

  constructor() {
    console.log('Hello ProductCardComponent Component');
  }

}
