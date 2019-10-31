import { Component, OnInit } from '@angular/core';
import { Item, Title } from '../../app/app.menu-model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  populateMenu() {

    const sections: Title[] = [
      {
        titleName: 'Σαλατες',
        content: [
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
        ]
      },
      {
        titleName: 'Σαλατες',
        content: [
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
        ]
      },
      {
        titleName: 'Σαλατες',
        content: [
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
          {
            name: 'Σαλάτα Οινοαπόσταγμα',
            description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
            price: '8.80'
          },
        ]
      }
    ];
  }



}
