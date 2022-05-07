import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming',
  templateUrl: './coming.page.html',
  styleUrls: ['./coming.page.scss'],
})
export class ComingPage implements OnInit {

  constructor() {}
    options={
      centerdslides: true,
      loop: true,
      spaceBetween: -60,//make it obvious that it is slides
    };
    ngOnInit() {
    }

}
