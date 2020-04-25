import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  lat = 38.117959;
  lng = 23.862464;
  zoom = 14;

  ngOnInit() {
  
  }

}
