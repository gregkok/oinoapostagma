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
    const isSafari = /^((?!chrome|android).)*safari/i.test(this.window.navigator.userAgent);
    const iOS = /iPad|iPhone|iPod/.test(this.window.navigator.platform);
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(this.window.navigator.userAgent);
    if (isSafari || iOS || isIEOrEdge) {
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
