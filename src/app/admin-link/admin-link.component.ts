import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-link',
  templateUrl: './admin-link.component.html',
  styleUrls: ['./admin-link.component.scss']
})
export class AdminLinkComponent implements OnInit {

  constructor(private userService: UserService) { }

  session: Boolean;

  ngOnInit(): void {
    this.userService.getUser('admin', 'admin').then( user => {
      this.session = user[0].session;
    });
  }

}
