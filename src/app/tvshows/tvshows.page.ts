import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.page.html',
  styleUrls: ['./tvshows.page.scss'],
})
export class TvshowsPage implements OnInit {

  constructor() {}
  options={
    centerdslides: true,
    loop: true,
    spaceBetween: -60,//make it obvious that it is slides
  };
  ngOnInit() {
  }

}
