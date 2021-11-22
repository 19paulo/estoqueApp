import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card';
import { CategorieCardComponent } from './categorie-card/categorie-card';
@NgModule({
	declarations: [ProductCardComponent,
    CategorieCardComponent],
	imports: [],
	exports: [ProductCardComponent,
    CategorieCardComponent]
})
export class ComponentsModule {}
