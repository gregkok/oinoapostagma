import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../service/window-ref.service';

@Component({
  selector: 'app-first-image',
  templateUrl: './first-image.component.html',
  styleUrls: ['./first-image.component.scss']
})
export class FirstImageComponent implements OnInit {

  isMobile: boolean;
  window = this.windowRef.nativeWindow;

  constructor(private windowRef: WindowRefService) { }

  ngOnInit() {
    this.isMobile = this.window.innerWidth <= 420;
    console.log('isMobile', this.isMobile);
  }

}
