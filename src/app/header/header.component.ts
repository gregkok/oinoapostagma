import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('fadeInFadeOut', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('closed => open', [
        animate('1s 0s ease')
      ]),
      transition('open => closed', [
        animate('0.5s 0s ease')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuClicked = false;
  constructor() { }

  ngOnInit() {
    
  }

  onMenuClick() {
    console.log("i am clicked");
    this.toggleMenu();
    this.toggleClass();
    this.disableScrolling();
  }

  toggleMenu() {
    this.isMenuClicked = !this.isMenuClicked;
  }

  toggleClass() {
    $('#nav-container').toggleClass('pushed');
  }


  disableScrolling() {
    if (this.isMenuClicked) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  }
}
