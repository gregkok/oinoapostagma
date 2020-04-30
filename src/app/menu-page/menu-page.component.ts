import { Component, OnInit } from '@angular/core';
import { sections } from 'app/app.menu-model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {
  public menu = sections;
  constructor() { }

  ngOnInit() {
  }
}
