import { Component, OnInit } from '@angular/core';
import Instafeed from 'instafeed.js';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    //   let feed = new Instafeed({
    //     get: 'tagged',
    //     tagName: 'oinoapostagmaisonparea',
    //     limit: '12',
    //     resolution: 'standard_resolution',
    //     accessToken: '',
    //     sortBy: 'most-recent',
    //     clientId: '',
    //     template: '<a class="instafeed" href="{{link}} title="{{caption}}"><img src="{{image}}" alt="{{caption}}"/></a>'
    //   });
    //   feed.run();
  }
}
