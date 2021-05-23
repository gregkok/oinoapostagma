import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { UserService } from '../user-service.service';
import {AboutUs} from '../about-us';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title = 'Οινοαπόσταγμα - Το μαγαζί της παρέας';
  private showAboutUsForm = false;
  aboutUs: AboutUs;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getAboutUs().subscribe(data => {
      this.aboutUs = data;
    });
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

  public aboutUsForm(): void {
    this.showAboutUsForm = !this.showAboutUsForm;
  }

}
