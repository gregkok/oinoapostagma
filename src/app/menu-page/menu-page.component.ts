import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  salad;
  meat;
  type;
  name;
  price;

  menuObjectOne = [
    this.salad = {
      type: 'Meats',
      list:{
        name: 'choriatiki',
        price: 12
      }
    },
    this.meat = [
      {
        type: 'Meats',
        name: 'choriatiki',
        price: 12
      },
      {
        type: 'Meats',
        name: 'saganaki',
        price: '12'
      },
      {
        type: 'Meats',
        name: 'ntakos',
        price: '14'
      }
    ]
  ];

  menuObjectTwo = [
    this.salad = {
      tittle: 'Salads',
      choriatiki: {
        name: 'choriatiki',
        price: 12
      },
      saganaki: {
        name: 'saganaki',
        price: '12'
      },
      ntakos: {
        name: 'ntakos',
        price: '14'
      }
    },
    this.meat = {
      tittle: 'Salads',
      choriatiki: {
        name: 'choriatiki',
        price: 12
      },
      saganaki: {
        name: 'saganaki',
        price: '12'
      },
      ntakos: {
        name: 'ntakos',
        price: '14'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
