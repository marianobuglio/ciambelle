import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
    debugger
      this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
