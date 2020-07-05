import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  title = 'Οινοαπόσταγμα - Το μαγαζί της παρέας';

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        name: 'description',
        content: 'Οινοαποσταγμα, Κρεατικά, κυρίως πιάτα, μεζεδοπιατάκια και φυσικά καλή παρέα με τα καλύτερα οινοαποστάγματα!'
      }
    );
  }

}
