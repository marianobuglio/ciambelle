import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/services/user.service'
@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  status: boolean = false;
  user: any
  clickEvent(){
    debugger
      this.status = !this.status;
  }
  constructor(private authService: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

}
