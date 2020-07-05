import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title = 'Οινοαπόσταγμα - Το μαγαζί της παρέας';

  constructor( private titleService: Title, private metaTagService: Meta) { }

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

}
