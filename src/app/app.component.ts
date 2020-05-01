import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WindowRefService } from './service/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private windowRef: WindowRefService, private chRef: ChangeDetectorRef) { }

  window = this.windowRef.nativeWindow;
  ready = false;

  ngOnInit() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
    if (isSafari) {
      this.ready = true;
    } else {
      console.log(this.window.navigator);
      this.window.onload = () => {
        this.ready = true;
        console.log('ready');
        this.chRef.detectChanges();
      };
    }

  }
}
