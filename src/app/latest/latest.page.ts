import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.page.html',
  styleUrls: ['./latest.page.scss'],
})
export class LatestPage implements OnInit {

  constructor() {}
    options={
      centerdslides: true,
      loop: true,
      spaceBetween: -60,//make it obvious that it is slides
    };
    ngOnInit() {
    }

}
