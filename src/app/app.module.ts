import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { NewProductPage } from '../pages/new-product/new-product';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { NewCategoryPage } from '../pages/new-category/new-category';
import { IonicStorageModule } from '@ionic/storage';
import { CategoryProvider } from '../providers/category/category';
import { DatePipe } from '@angular/common';
import { ProductProvider } from '../providers/product/product';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductDetailPage,
    NewProductPage,
    CategoriesPage,
    CategoryDetailPage,
    NewCategoryPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductDetailPage,
    NewProductPage,
    CategoriesPage,
    CategoryDetailPage,
    NewCategoryPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryProvider,
    DatePipe,
    ProductProvider,
    LoginProvider
  ]
})
export class AppModule {}
