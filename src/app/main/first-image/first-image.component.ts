import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-first-image',
  templateUrl: './first-image.component.html',
  styleUrls: ['./first-image.component.scss']
})
export class FirstImageComponent implements OnInit {

public innerWidth: any;
protected imageUrl: string;

  constructor() { }

  ngOnInit() {
    // this.innerWidth = window.innerWidth;
    // if (this.innerWidth < )
    // assets/images/xtapodiBlured.png
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
