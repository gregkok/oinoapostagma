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
  maxHeight: number;

  constructor(private windowRef: WindowRefService) { }

  ngOnInit() {
    this.maxHeight = this.window.innerHeight - 370;
    this.isMobile = this.window.innerWidth <= 420;
  }

}
