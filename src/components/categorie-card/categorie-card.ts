import { Component, Input } from '@angular/core';

/**
 * Generated class for the CategorieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categorie-card',
  templateUrl: 'categorie-card.html'
})
export class CategorieCardComponent {

  @Input()
  name: string;

  @Input()
  description: string;

  constructor() {
    console.log('Hello ProductCardComponent Component');
  }

}
