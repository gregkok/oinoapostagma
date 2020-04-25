import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './service/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private windowRef: WindowRefService) {}

window = this.windowRef.nativeWindow;
ready = false;

ngOnInit() {
  // this.window.document.addEventListener('DOMContentLoaded', () => {
  //   this.ready = true;
  // });

  this.window.onload = () => {
    this.ready = true;
  };
}


}
