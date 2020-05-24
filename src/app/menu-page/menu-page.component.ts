import { Component, OnInit } from '@angular/core';
import { kouzina, kava } from '../../app/app.menu-model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {
  public menuKouzina = kouzina;
  public menuKava = kava;
  public isKouzinaExpanded = false;
  public isKavaExpanded = false;

  constructor() { }

  ngOnInit() {
    console.log('menuKouzina', this.menuKouzina);
    console.log('menuKava', this.menuKava);
  }

  onSectionClick(type: string) {
    switch (type) {
      case 'kouzina':
        this.isKouzinaExpanded = !this.isKouzinaExpanded;
        break;
      case 'kava':
        this.isKavaExpanded = !this.isKavaExpanded;
        break;
    }
  }

  //   WIFI :
  // Oinoapostagma

  // Ο καταναλωτής δεν εχει υποχρέωση
  // να πληρώσει εάν δεν λάβει το νόμιμο παραστατικό στοιχείο
  // ( απόδειξη ή τιμολόγιο )

}
