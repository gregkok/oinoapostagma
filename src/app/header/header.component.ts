import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuClicked = false;
  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.toggleMenu();
    this.toggleClass();
    this.disableScrolling();
  }

  disableScrolling() {
    if (this.isMenuClicked) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  }

  toggleMenu() {
    this.isMenuClicked = !this.isMenuClicked;
  }

  toggleClass() {
    $('#nav-container').toggleClass('pushed');
  }

}
