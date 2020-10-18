import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../service/window-ref.service';
import { gallery } from './gallery/gallery-model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public document = this.windowRef.nativeWindow.document;
  public galleryObject = gallery;

  constructor(private windowRef: WindowRefService) { }

  ngOnInit(): void {
    console.log(this.galleryObject);
  }

}
