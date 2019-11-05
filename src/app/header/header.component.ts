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
      $('#nav-container').toggleClass('pushed');
      this.isMenuClicked = !this.isMenuClicked;
      // if (this.isMenuClicked) {
      //   document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      // } else {
      //   document.getElementsByTagName('body')[0].style.overflow = '';
      // }
  }

}
