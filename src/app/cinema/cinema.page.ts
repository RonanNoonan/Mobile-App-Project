import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {

  constructor() {}
    options={
      centerdslides: true,
      loop: true,
      spaceBetween: -60,//make it obvious that it is slides
    };
  ngOnInit() {
  }

}
