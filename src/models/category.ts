export class Category {

  name: string;
  description: string;

  constructor(data?) {
    if(data){
      this.name = data.name;
      this.description = data.description;
    }
  }
}
