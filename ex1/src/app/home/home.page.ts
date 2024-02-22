// Exercício 1

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//   constructor() {}

//   dolar = ''
//   reais = 0

//   Converter(){
//     this.reais= parseFloat(this.dolar)
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ac = ''
  agh = ''
  at = ''
  res = 0

  Nota(){
    this.res= (parseFloat(this.ac)*0.2) + (parseFloat(this.agh)*0.1) + (parseFloat(this.at)*0.7)
  }

}
