import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor() {}
    options={
      centerdslides: true,
      loop: true,
      spaceBetween: -60,//make it obvious that it is slides
    };
    ngOnInit() {
    }
}



