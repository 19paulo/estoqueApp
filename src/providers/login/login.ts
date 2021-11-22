import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(private storage: Storage) {
    console.log('Hello LoginProvider Provider');
  }

  async login(login, password) {
    const user = await this.storage.get('login');
    const key = await this.storage.get('password');
    if (user && key) {
      if (user === login && password === key) {
        console.log("User and Password match");
        const response = {
          validated: true,
        }
        return response;
      } else {
        const response = {
          validated: false,
        }
        return response;
      }
    } else {
        console.log("User and Password don't match.")
        this.storage.set('login', login);
        this.storage.set('password', password);
        const response = {
          validated: true,
        }
        return response;
    }
  }

}
