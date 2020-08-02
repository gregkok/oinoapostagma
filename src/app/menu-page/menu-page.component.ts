import { Component, OnInit } from '@angular/core';
import { kouzina, kava } from '../../app/app.menu-model';
import { WindowRefService } from '../service/window-ref.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

  public title = 'Οινοαπόσταγμα Μενού - Το μαγαζί της παρέας';
  public menuKouzina = kouzina;
  public menuKava = kava;
  public isKouzinaExpanded = true;
  public isKavaExpanded = true;
  public document = this.windowRef.nativeWindow.document;
  public currentId: number;
  public currentMaxHeight;
  public imageOpened;
  private currentImgeElement: any;
  private previousImgeElement: any;
  private previousId;

  constructor(
    private windowRef: WindowRefService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.setMetaTitleAndTag();
  }

  protected setMetaTitleAndTag() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        name: 'description',
        content: 'Οινοαποσταγμα, Κρεατικά, κυρίως πιάτα, μεζεδοπιατάκια και φυσικά καλή παρέα με τα καλύτερα οινοαποστάγματα!'
      }
    );
  }

  onSectionClick(type: string) {
    switch (type) {
      case 'kouzina':
        this.isKouzinaExpanded = !this.isKouzinaExpanded;
        break;
      case 'kava':
        this.isKavaExpanded = !this.isKavaExpanded;
        break;
    }
  }

  // onItemClick(itemNumber: number) {
   // if (this.currentId === itemNumber) {
     // this.currentId = undefined;
   // } else {
    //  this.currentId = itemNumber;
  //  }
   // this.setAccordionMaxHeight();
 // }

  setAccordionMaxHeight() {
    if (this.currentId !== undefined) {
      if (this.previousId !== undefined) {
        this.previousImgeElement = this.document.getElementById(this.previousId);
        this.previousImgeElement.style.maxHeight = 0;
      }
      this.currentImgeElement = this.document.getElementById(this.currentId);
      this.currentImgeElement.style.maxHeight = this.currentImgeElement.scrollHeight + 'px';
    } else {
      this.currentImgeElement.style.maxHeight = 0;
    }
    this.previousId = this.currentId;
  }
}
