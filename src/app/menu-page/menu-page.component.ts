import { Component, OnInit } from '@angular/core';
import { kouzina, kava } from '../../app/app.menu-model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {
  protected menuKouzina = kouzina;
  protected menuKava = kava;

  constructor() { }

  ngOnInit() {
    console.log('menuKouzina', this.menuKouzina);
    console.log('menuKava', this.menuKava);
  }

//   WIFI :
// Oinoapostagma

// Ο καταναλωτής δεν εχει υποχρέωση
// να πληρώσει εάν δεν λάβει το νόμιμο παραστατικό στοιχείο
// ( απόδειξη ή τιμολόγιο )

}
