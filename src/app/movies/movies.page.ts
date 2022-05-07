import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor() {}
    options={
      centerdslides: true,
      loop: true,
      spaceBetween: -60,//make it obvious that it is slides
    };
    ngOnInit() {
    }

}
